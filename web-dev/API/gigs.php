<?php

include_once __DIR__.'/../../include/entity/gig-service.php';
// include_once __DIR__.'/../../../include/entity/gig-service.php';

$r = new Request();
$r->handleRequest();

/**
* 
*/
class Request
{	
	function __construct() {
		# code...
	}

	public function handleRequest() {
		$data = '';

		switch ($_SERVER['REQUEST_METHOD']) {
			case 'GET':
				$data = $this->onGet();
				break;
			
			case 'POST':
				# code...
				break;

			default:
				throw new Exception("unable to detect request method: ".$_SERVER['REQUEST_METHOD'], 500);
				break;
		}

		header('Content-type: application/json');
		echo json_encode($data);
	}

	function onGet() {
		$service = new GigService();
		$gigs;
		$filter = $this->value('filter', '');
		$showName = $this->value('showName', null);

		switch ($filter) {
			case 'upcoming':
				$limit = $this->value('limit', 0);
				$gigs = $service->getUpcomingGigs($limit, $showName);
				break;

			case 'old':
				$limit = $this->value('limit', 0);
				$gigs = $service->getOldGigs($limit);
				break;

			case 'all':
			default:
				$gigs = array(
					'upcoming' => $service->getUpcomingGigs(),
					'old' => $service->getOldGigs()
				);
				break;
		}

		return $gigs;
	}

	public function onPost() {
		# code...
	}

	public function onPut() {
		# code...
	}

	public function onDelete() {
		# code...
	}

	protected function value($varName, $defaultValue = null) {
		return isset( $_REQUEST[$varName] ) ? $_REQUEST[$varName] : $defaultValue;
	}
}
