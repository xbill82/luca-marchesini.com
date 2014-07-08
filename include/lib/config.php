<?php
 
define('CFG_PATH', '../config.json');
 
/**
 * 
 */
class Config
{
	public $config = null;
	private static $_instance = null;
 
	public static function getInstance( $path = CFG_PATH ) {
		if ( self::$_instance == null ) {
			self::$_instance = new Config( $path );
		}
		
		return self::$_instance;
	}
 
	private function __construct( $path ) {
		$plainConfig = file_get_contents($path);
		$this->config = self::json_clean_decode($plainConfig);
 
		if ( is_null($this->config) )
			throw new Exception('Malformed configuration file '. $path, 1);
			
	}
 
	public function __get($name)
	{
		if (array_key_exists($name, $this->config)) {
			return $this->config->$name;
		}
 
		$trace = debug_backtrace();
		trigger_error(
			'Undefined property via __get() : ' . $name .
			' in ' . $trace[0]['file'] .
			' line ' . $trace[0]['line'],
			E_USER_NOTICE);
		return null;
	}
 
	public function __isset($name)
	{
		return isset($this->config->$name);
	}
 
	/**
	 * Custom version of the json_decode native function to allow comments in
	 * the config file.
	 */
	static function json_clean_decode($json, $assoc = false, $depth = 512, $options = 0) {
		// search and remove comments like /* */ and //
		$json = preg_replace("#(/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/)|([\s\t]//.*)|(^//.*)#", '', $json);
 
		if(version_compare(phpversion(), '5.4.0', '>=')) {
			$json = json_decode($json, $assoc, $depth, $options);
		}
		elseif(version_compare(phpversion(), '5.3.0', '>=')) {
			$json = json_decode($json, $assoc, $depth);
		}
		else {
			$json = json_decode($json, $assoc);
		}
 
		return $json;
	}
}
 
?>