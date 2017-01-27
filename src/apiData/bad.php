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
	$inp = file_get_contents('customerData.json',true);
	$tempArray = json_decode($inp);
	$eleCount = count($tempArray['id']);
	$makeUp = max($tempArray['id']);
	$makeUpPlus = intval($makeUp) + 1;

	///try to get hieght id
	$idGrabArray = json_decode($inp);
	$changeID = 0;
	foreach($idGrabArray as $loopableItem){
		
		if($loopableItem->id >= $changeID){
			$changeID = $loopableItem->id;
			$changeID++;
		}
		
	}
	

	$postData = json_decode(file_get_contents("php://input"));
	//$data = $_POST['name'];
	$dataNAme = $postData->name;
	$data = array(
			//	'name' => $_POST['body'],
				'id' => $changeID,
				'other' => $tempArray['id'],
				'otherBoat' => $makeUp,
				'eleCount' => $eleCount,
				//'id' => $makeUpPlus,
				'name' => $dataNAme,
				'coat' => $dataNAme,
				'more' => array(
						'coat' => $dataNAme,
						'moats' => 'mmmm',
					),
		);
	//$inp = file_get_contents('customerData.json');
	//$tempArray = json_decode($inp);
	array_push($idGrabArray, $data);
	$jsonData = json_encode($idGrabArray);
	file_put_contents('customerData.json', $jsonData);
?>