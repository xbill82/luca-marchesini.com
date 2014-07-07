<?php

include_once __DIR__.'/claim-repository.php';

/**
 * 
 */
class ClaimService
{	
	protected $repo;

	function __construct() {
		$this->repo = new ClaimRepository();
	}

	public function getFeatured($limit = 0) {
		return $this->repo->getFeaturedClaims($limit);
	}

	public function getOneFeatured() {
		return $this->repo->getOneFeaturedClaim();
	}

	public function getAll($limit = 0) {
		return $this->repo->getAllClaims($limit);
	}
}

?>