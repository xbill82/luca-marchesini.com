<?php

include_once __DIR__.'/../lib/db.php';

/**
 * 
 */
class GigRepository
{
	protected $db;

	function __construct() {
		try {
			$this->db = new Db();
		} catch (Exception $e) {
			throw new Exception("Error initializing database", 500);
		}
	}

	public function getUpcomingGigs($limit = 0, $showName = null) {
		$qry = "SELECT * FROM gigs WHERE date >= DATE(NOW())";
		if ($showName) $qry .= " AND show_name = '$showName' ";
		$qry .= " AND published = 1  ORDER BY DATE(date) ASC";
		if ($limit) $qry .= " LIMIT $limit";

		$r = $this->db->query($qry.';');
		$gigs = $this->resultSetToGigs($r);
		return $gigs;
	}

	public function getOldGigs($limit = 0) {
		$qry = "SELECT * FROM gigs WHERE date < DATE(NOW())";
		$qry .= " AND published = 1 ORDER BY DATE(date) DESC";
		if ($limit) $qry .= " LIMIT $limit";

		$r = $this->db->query($qry.';');
		$gigs = $this->resultSetToGigs($r);
		return $gigs;
	}

	protected function rowToGig($row) {
		if (empty($row->id))
			throw new Exception("Aw man... No id!", 500);

		if (empty($row->location))
			throw new Exception("Aw man... No location!", 500);

		if (empty($row->title))
			throw new Exception("Aw man... No title!", 500);

		if (empty($row->date))
			throw new Exception("Aw man... No date!", 500);
			
		$gig  = array(
			'id' => $row->id, 
			'location' => $row->location,
			'title' => $row->title,
			'date' => $row->date
			);

		if (!empty($row->time)) $gig['time'] = $row->time;
		if (!empty($row->show_name)) $gig['showName'] = $row->show_name;
		if (!empty($row->address)) $gig['address'] = $row->address;
		if (!empty($row->price)) $gig['price'] = $row->price;
		if (!empty($row->parent_event)) $gig['parentEvent'] = $row->parent_event;
		if (!empty($row->parent_event_url)) $gig['parentEventUrl'] = $row->parent_event_url;
		if (!empty($row->booking_mail)) $gig['bookingMail'] = $row->booking_mail;
		if (!empty($row->booking_phone)) $gig['bookingPhone'] = $row->booking_phone;
		if (!empty($row->lat)) $gig['lat'] = $row->lat;
		if (!empty($row->lng)) $gig['lng'] = $row->lng;
		if (!empty($row->z)) $gig['z'] = $row->z;

		return $gig;
	}

	protected function resultSetToGigs($set) {
		$gigs = array();
		$set->setFetchMode(PDO::FETCH_OBJ);

		foreach ($set as $row) {
			$gig = $this->rowToGig($row);
			array_push($gigs, $gig);
		}

		return $gigs;
	}
}