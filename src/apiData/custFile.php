<?php 



	//ERASE ABLE ONLY WHEN I MAKE A NEW PHP TO HOLD THESE
	$inp = file_get_contents('customerData.json',true);
	///try to get hieght id
	$idGrabArray = json_decode($inp);
	$changeID = 0;
	foreach($idGrabArray as $loopableItem){
		
		if($loopableItem->id > $changeID){
			$changeID = $loopableItem->id;
			$changeID++;
		}
		
	}

	//THIS IS WHATS PUSHED FROM NG 
	
	$postData = json_decode(file_get_contents("php://input"));
	
	$dataName = $postData->name;
	$dataEmail = $postData->email;
	$dataTelephone = $postData->telephone;
	$dataAddress = $postData->address;
	//$dataName = $postData->name;

	
	$data = array(
			
				'name' => $dataName,
				'email' => $dataEmail,
				'telephone' => $dataEmail,
				'address' => array(
						'street' => $dataAddress->street,
						'city' => $dataAddress->city,
						'state' => $dataAddress->state,
						'zip' => $dataAddress->zip,
					),
		);
	//$inp = file_get_contents('customerData.json');
	//$tempArray = json_decode($inp);
	array_push($idGrabArray, $data);
	$jsonData = json_encode($idGrabArray);
	file_put_contents('customerData.json', $jsonData);
?>