<?php
    if(!empty($_POST['data'])){
        ini_set('memory_limit', '256M');
        header("Access-Control-Allow-Origin: *");

        $datastring = $_POST['data'];
        $fname = $_POST['fname'];

        $data = explode(",", $datastring);

        $datatosave = '';
        foreach ($data as $chr) {
            $datatosave .= pack('C', $chr);
        }

        $file = fopen($fname, 'wb');
        fwrite($file, $datatosave);
        fclose($file);
    }
?>