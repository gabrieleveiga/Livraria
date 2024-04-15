// Adicionar efeito de destaque aos botões
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#ffcc00';
        this.style.color = '#333';
    });

    button.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#ffd700';
        this.style.color = '#333';
    });
});

// Enviar o formulário de cadastro
document.getElementById('cadastro-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor e processá-los
    // Vamos apenas simular o envio bem-sucedido e exibir uma mensagem de confirmação por enquanto
    alert('Cadastro realizado com sucesso!');
    this.reset(); // Limpar o formulário após o envio
});
