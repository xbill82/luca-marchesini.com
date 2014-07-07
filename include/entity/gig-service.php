<?php

include_once __DIR__.'/gig-repository.php';

/**
 * 
 */
class GigService
{	
	protected $repo;

	function __construct() {
		$this->repo = new GigRepository();
	}

	public function getUpcomingGigs($limit = 0, $showName = null) {
		return $this->repo->getUpcomingGigs($limit, $showName);
	}

	public function getOldGigs($limit = 0) {
		return $this->repo->getOldGigs($limit);
	}
}

?>