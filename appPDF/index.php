<?php
# Cargamos la librería dompdf.
require_once 'dompdf/autoload.inc.php';

// reference the Dompdf namespace
use Dompdf\Dompdf;

// instantiate and use the dompdf class
$dompdf = new Dompdf();

$dompdf->load_html(file_get_contents("file:///C:/xampp/htdocs/AndTeamProyecto/appPDF/reportePDF.html"));

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('A4','Portrait');

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
$dompdf->stream('Reporte');
?>