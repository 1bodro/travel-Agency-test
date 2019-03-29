<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	require_once dirname(__FILE__).'/Classes/PHPExcel.php';
	$inputFileName = 'old.xlsx';
	$outputFileName = 'new_results.xlsx';
	rename($outputFileName, $inputFileName);
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
	$sheet = $objPHPExcel->getActiveSheet();
	
	$row = $sheet->getHighestRow();
	if($row > 2) {
		$row++;
	}

	$photos1 = '';
	$array1 = $_POST['photo1'];
	$photos1 = implode(",", $array1);
	
	$photos3 = '';
	$array3 = $_POST['photo3'];
	$photos3 = implode(",", $array3);
	
	$photos4 = '';
	$array4 = $_POST['photo4'];
	$photos4 = implode(",", $array4);
	
	$photos5 = '';
	$array5 = $_POST['photo5'];
	$photos5 = implode(",", $array5);
	
	$photos2 = '';
	$array2 = $_POST['photo2'];
	$photos2 = implode(",", $array2);
	// var_dump($row);exit();
	
	$row++;
	$sheet->setCellValue('A'.$row, $_POST['male']);
	$sheet->setCellValue('B'.$row, $_POST['person-age']);
	$sheet->setCellValue('C'.$row, $_POST['point-1']);
	$sheet->setCellValue('D'.$row, $_POST['point-2']);
	$sheet->setCellValue('E'.$row, $_POST['point-3']);
	$sheet->setCellValue('F'.$row, $_POST['point-4']);
	$sheet->setCellValue('G'.$row, $_POST['point-5']);
	$sheet->setCellValue('H'.$row, $_POST['point-6']);
	$sheet->setCellValue('I'.$row, $_POST['point-7']);
	$sheet->setCellValue('J'.$row, $_POST['point-8']);
	$sheet->setCellValue('K'.$row, $_POST['point-9']);
	$sheet->setCellValue('L'.$row, $_POST['point-10']);
	$sheet->setCellValue('M'.$row, $_POST['point-11']);
	$sheet->setCellValue('N'.$row, $_POST['point-12']);
	$sheet->setCellValue('O'.$row, $_POST['point-13']);
	$sheet->setCellValue('P'.$row, $_POST['point-14']);
	$sheet->setCellValue('Q'.$row, $_POST['point-15']);
	$sheet->setCellValue('R'.$row, $_POST['point-16']);
	$sheet->setCellValue('S'.$row, $_POST['point-17']);
	$sheet->setCellValue('T'.$row, $_POST['point-18']);
	$sheet->setCellValue('U'.$row, $_POST['point-19']);
	$sheet->setCellValue('V'.$row, $_POST['point-20']);
	$sheet->setCellValue('W'.$row, $_POST['point-2-1']);
	$sheet->setCellValue('X'.$row, $_POST['point-2-2']);
	$sheet->setCellValue('Y'.$row, $_POST['point-2-3']);
	$sheet->setCellValue('Z'.$row, $_POST['point-2-4']);
	$sheet->setCellValue('AA'.$row, $_POST['point-2-5']);
	$sheet->setCellValue('AB'.$row, $_POST['point-2-6']);
	$sheet->setCellValue('AC'.$row, $_POST['point-2-7']);
	$sheet->setCellValue('AD'.$row, $_POST['point-2-8']);
	$sheet->setCellValue('AE'.$row, $_POST['point-2-9']);
	$sheet->setCellValue('AF'.$row, $_POST['point-2-10']);
	$sheet->setCellValue('AG'.$row, $_POST['point-2-11']);
	$sheet->setCellValue('AH'.$row, $_POST['point-2-12']);
	$sheet->setCellValue('AI'.$row, $_POST['point-2-13']);
	$sheet->setCellValue('AJ'.$row, $_POST['point-2-14']);
	$sheet->setCellValue('AK'.$row, $_POST['point-2-15']);
	$sheet->setCellValue('AL'.$row, $_POST['point-2-16']);
	$sheet->setCellValue('AM'.$row, $_POST['point-2-17']);
	$sheet->setCellValue('AN'.$row, $_POST['point-2-18']);
	$sheet->setCellValue('AO'.$row, $_POST['point-2-19']);
	$sheet->setCellValue('AP'.$row, $_POST['point-2-20']);
	$sheet->setCellValue('AQ'.$row, $_POST['point-2-21']);
	$sheet->setCellValue('AR'.$row, $_POST['point-2-22']);
	$sheet->setCellValue('AS'.$row, $_POST['point-2-23']);
	$sheet->setCellValue('AT'.$row, $_POST['point-2-24']);
	$sheet->setCellValue('AU'.$row, $_POST['point-2-25']);
	$sheet->setCellValue('AV'.$row, $_POST['point-2-26']);
	$sheet->setCellValue('AW'.$row, $_POST['point-2-27']);
	$sheet->setCellValue('AX'.$row, $_POST['point-2-28']);
	$sheet->setCellValue('AY'.$row, $array1[0]);
	$sheet->setCellValue('AZ'.$row, $array1[1]);
	$sheet->setCellValue('BA'.$row, $array1[2]);
	$sheet->setCellValue('BB'.$row, $array2[0]);
	$sheet->setCellValue('BC'.$row, $array2[1]);
	$sheet->setCellValue('BD'.$row, $array2[2]);
	$sheet->setCellValue('BE'.$row, $array3[0]);
	$sheet->setCellValue('BF'.$row, $array3[1]);
	$sheet->setCellValue('BG'.$row, $array3[2]);
	$sheet->setCellValue('BH'.$row, $array4[0]);
	$sheet->setCellValue('BI'.$row, $array4[1]);
	$sheet->setCellValue('BJ'.$row, $array4[2]);
	$sheet->setCellValue('BK'.$row, $array5[0]);
	$sheet->setCellValue('BL'.$row, $array5[1]);
	$sheet->setCellValue('BM'.$row, $array5[2]);
	$sheet->getStyle('BM'.$row)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);



	//$arHeadStyle = array(
		//'fill'  => array(
		//	'type' => PHPExcel_Style_Fill::FILL_SOLID,
		//	'color' => array('rgb' => 'A9A9A9')
		//)
	 //);
	 //$sheet->getStyle('A'.$row.':BH'.$row)->applyFromArray($arHeadStyle);

	// var_dump($sheet->getHighestRow()); exit();

	// $sheet->setCellValue('A1', 'Hello1a');
	// $sheet->setCellValue('C1', 'Hello1s');

	// $objDrawing = new PHPExcel_Worksheet_Drawing();
	// $objDrawing->setPath(dirname(__FILE__).'/image/test-3/1-2.jpg');
	// $objDrawing->setCoordinates('A2');
	// $objDrawing->setOffsetX(0);
	// $objDrawing->setOffsetY(0);
	// $objDrawing->setWidth(200);
	// $objDrawing->setHeight(150);
	// $objDrawing->setWorksheet($objPHPExcel->getActiveSheet());

	// $sheet->getColumnDimension('A')->setWidth(29);
	// $sheet->getRowDimension(2)->setRowHeight(114);
	// $sheet->getStyle('A2')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER)->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);

	$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
	$objWriter->save($outputFileName);
	unlink($inputFileName);
}
exit('<meta http-equiv="refresh" content="0; />');
?>