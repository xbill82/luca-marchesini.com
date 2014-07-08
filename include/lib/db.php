<?php

/**
 * 
 */
class Db
{
	private $host = 'localhost';
	private $port = '8889';
	private $db = 'narrav2';
	private $user = 'storyteller';
	private $pass = '';

	private $pdo;
	
	function __construct() {
		$this->pdo = new PDO(
			'mysql:host='.$this->host.';'.
			'port='.$this->port.';'.
			'dbname='.$this->db.';',
			$this->user,
			$this->pass,
			array( PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
		);
	}

	public function query($statement) {
		return $this->pdo->query($statement);
	}
}
