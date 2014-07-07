<?php

include_once __DIR__.'/../lib/db.php';

/**
 * 
 */
class ClaimRepository
{
	protected $db;

	function __construct() {
		// try {
			$this->db = new Db();
		// } catch (Exception $e) {
		// 	throw new Exception("Error initializing database", 500);
		// }
	}

	public function getOneFeaturedClaim() {
		$qry = "SELECT * FROM claims WHERE published = 1 AND featured = 1";
		if ($limit) $qry .= " ORDER BY RAND() LIMIT 0,1";

		$r = $this->db->query($qry.';');
		$claims = $this->resultSetToClaims($r);
		return $claims;
	}

	public function getFeaturedClaims($limit = 0) {
		$qry = "SELECT * FROM claims WHERE published = 1 AND featured = 1";
		if ($showName) $qry .= " AND show_name $showName ";
		if ($limit) $qry .= " LIMIT $limit";

		$r = $this->db->query($qry.';');
		$claims = $this->resultSetToClaims($r);
		return $claims;
	}

	public function getAllClaims($limit = 0) {
		$qry = "SELECT * FROM claims WHERE published = 1 ";
		if ($limit) $qry .= " LIMIT $limit";

		$r = $this->db->query($qry.';');
		$claims = $this->resultSetToClaims($r);
		return $claims;
	}

	protected function rowToClaim($row) {
		if (empty($row->id))
			throw new Exception("Aw man... No id!", 500);

		if (empty($row->author))
			throw new Exception("Aw man... No author!", 500);

		if (empty($row->txt))
			throw new Exception("Aw man... No txt!", 500);
			
		$claim  = array(
			'id' => $row->id, 
			'author' => $row->author,
			'txt' => $row->txt
			);

		if (!empty($row->position)) $claim['position'] = $row->position;
		if (!empty($row->location)) $claim['location'] = $row->location;
		if (!empty($row->show_name)) $claim['show_name'] = $row->show_name;
		if (!empty($row->featured)) $claim['featured'] = $row->featured;
		if (!empty($row->published)) $claim['published'] = $row->published;

		return $claim;
	}

	protected function resultSetToClaims($set) {
		$claims = array();
		$set->setFetchMode(PDO::FETCH_OBJ);

		foreach ($set as $row) {
			$claim = $this->rowToClaim($row);
			array_push($claims, $claim);
		}

		return $claims;
	}
}