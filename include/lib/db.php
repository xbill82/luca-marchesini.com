<?php

include_once __DIR__.'/config.php';

/**
 * 
 */
class Db
{
	private $pdo;
	
	function __construct() {
		$conf = null;
		try{
			$conf = Config::getInstance( __DIR__.'/config.json' );
		} catch (Exception $e) {
			error_log($e->getMessage());
			exit;
		}

		$this->pdo = new PDO(
			'mysql:host='.$conf->host.';'.
			'port='.$conf->port.';'.
			'dbname='.$conf->db.';',
			$conf->user,
			$conf->pass,
			array( PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
		);
	}

	public function query($statement) {
		return $this->pdo->query($statement);
	}
}
