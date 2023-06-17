<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $idade = $_POST["idade"];
    $telefone = $_POST["telefone"];
    $email = $_POST["email"];
    $linkedin = $_POST["linkedin"];
    $objetivos = $_POST["objetivo"];
    $experiencias = $_POST["experiencia"];
    $formacoes = $_POST["formacao"];

    echo "Nome: " . $nome . "<br>";
    echo "Sobrenome: " . $sobrenome . "<br>";
    echo "Idade: " . $idade . "<br>";
    echo "Telfone : " . $telefone . "<br>";
    echo "Email : " . $email . "<br>";
    echo "Linkedin : " . $linkedin . "<br>";
    foreach ($objetivos as $objetivo){
        echo "Objetivos: " . $objetivo . "<br>";
    }

    foreach ($experiencias as $experiencia){
        echo "Experiencias: " . $experiencia . "<br>";
    }

    foreach ($formacoes as $formacao){
        echo "Formações: " . $formacao . "<br>";
    }

}