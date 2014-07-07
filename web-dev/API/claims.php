<?php

include_once __DIR__.'/../../include/entity/claim-service.php';
// include_once __DIR__.'/../../../include/entity/claim-service.php';

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
		$service = new ClaimService();
		$claims;
		$filter = $this->value('filter', '');
		$limit = $this->value('limit', 0);

		switch ($filter) {
			case 'featured':
				$claims = $service->getFeatured($limit);
				break;

			case 'one-featured':
				$claims = $service->getOnefeatured();
				break;

			default:
				$claims = $service->getAll($limit);
				break;
		}

		return $claims;
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
