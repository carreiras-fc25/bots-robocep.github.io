<?php
// Verificar se o formulário de upload foi submetido
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Verificar se o arquivo foi enviado
    if (isset($_FILES['arquivo'])) {
        $arquivo = $_FILES['arquivo'];
        // Verificar se o arquivo é válido
        if ($arquivo['error'] == 0) {
            // Salvar o arquivo no servidor
            $nome_arquivo = $arquivo['name'];
            $tipo_arquivo = $arquivo['type'];
            $tamanho_arquivo = $arquivo['size'];
            $tmp_arquivo = $arquivo['tmp_name'];
            $destino_arquivo = 'uploads/' . $nome_arquivo;
            move_uploaded_file($tmp_arquivo, $destino_arquivo);
            // Retornar uma mensagem de sucesso
            echo json_encode(['mensagem' => 'Arquivo uploaded com sucesso!']);
        } else {
            // Retornar uma mensagem de erro
            echo json_encode(['mensagem' => 'Erro ao upload do arquivo!']);
        }
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Verificar se o arquivo existe no servidor
    $arquivo = 'uploads/arquivo.txt';
    if (file_exists($arquivo)) {
        // Enviar o arquivo para download
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="arquivo.txt"');
        header('Content-Length: ' . filesize($arquivo));
        readfile($arquivo);
        exit;
    } else {
        // Retornar uma mensagem de erro
        echo json_encode(['mensagem' => 'Arquivo não encontrado!']);
    }
}
?>
