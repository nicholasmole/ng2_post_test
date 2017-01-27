<?php 
	/*$json = file_get_contents('customerData.json');
	//var_dump($json);

	$henry = $_POST['body'];
	$oJson = json_decode($json) ;

	$data = array(
			'news_title' => 'My new title',
			'news_content' => 'My new content',
			'other_values_doesnt_mach_json_file' => 'always comes at the end of the array',
	);

	$newJsonString = json_encode($henry);
	file_put_contents('customerData.json', $newJsonString);
	*/
	//$data = $_POST['body'];
	$postData = json_decode(file_get_contents("php://input"));
	//$data = $_POST['name'];
	$dataNAme = $postData->name;
	$data = array(
			//	'name' => $_POST['body'],
				'name' => $dataNAme,
		);
	$inp = file_get_contents('customerData.json');
	$tempArray = json_decode($inp);
	array_push($tempArray, $data);
	$jsonData = json_encode($tempArray);
	file_put_contents('customerData.json', $jsonData);
?>