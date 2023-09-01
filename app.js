<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hamburgueria!</title>

    <!-- link fontes -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">

    <!-- link css -->
    <link rel="stylesheet" href="css/style.css">

</head>
<body>

<!-- header seções   -->

<header class="header">

   <div id="menu-btn" class="fas fa-bars icons"></div>
   <div id="search-btn" class="fas fa-search icons"></div>

   <nav class="navbar">
      <a href="#home">início</a>
      <a href="#menu">menu</a>
      <a href="#about">sobre</a>
      <span class="space"></span>
      <a href="#reviews">avaliações</a>
      <a href="#contact">contato</a>
      <a href="#blogs">blogs</a>
   </nav>

   <a href="#" class="fas fa-shopping-cart icons"></a>

   <a href="#home" class="logo"><img src="images/logo1.png" alt=""></a>

   <form action="" class="search-form">
      <input type="search" name="" placeholder="procure aqui..." id="search-box">
      <label for="search-box" class="fas fa-search icons"></label>
   </form>

</header>

<!-- termina a seção do cabeçalho  -->

<!-- seção inicial começa  -->

<section class="home" id="home">

   <div class="content">
      <img data-aos="fade-up" data-aos-delay="150" src="images/Buger5.png" alt="">
      <h3 data-aos="fade-up" data-aos-delay="300">TANTA CARNE QUE VOCÊ VAI FICAR LOUCO</h3>
      <p data-aos="fade-up" data-aos-delay="450">Não deixe para amanhã o hambúrguer que você pode comer hoje.</p>
      <a data-aos="fade-up" data-aos-delay="600" href="#menu" class="btn">NOSSO MENU</a>
   </div>

</section>

<!-- seção inicial terminas -->

<!-- começa a seção de serviço -->

<section class="service">

   <div class="box" data-aos="fade-up" data-aos-delay="150">
      <i class="fas fa-hamburger"></i>
      <h3>melhor qualidade</h3>
      <p>Não existe dia certo para comer hambúrguer. Só o nosso hambúrguer tem o sabor que te leva para as nuvens! O hambúrguer não é um vilão, ele é o mocinho que faz todo mundo feliz no final!</p>
   </div>

   <div class="box" data-aos="fade-up" data-aos-delay="300">
      <i class="fas fa-shipping-fast"></i>
      <h3>entrega grátis</h3>
      <p>Ás vezes o produto mais caro não é o de maior qualidade, velocidade e qualidade.</p>
   </div>

   <div class="box" data-aos="fade-up" data-aos-delay="450">
      <i class="fas fa-headset"></i>
      <h3>SUPORTE</h3>
      <p>Você sempre pode contar conosco para ajudá-lo.</p>
   </div>

</section>

<!--  termina a seção de serviço -->

<!-- começa a seção do menu -->

<section class="menu" id="menu">

   <div class="heading">
      <img src="images/title-img.png" alt="">
      <h3>NOSSO MENU</h3>
   </div>

   <div class="box-container">

      <div class="box" data-aos="fade-up" data-aos-delay="150">
         <img src="images/Buger1.png" alt="">
         <div class="content">
            <div class="stars">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
            </div>
            <h3>hambúrguer simples</h3>
            <div class="price">R$10,50</div>
            <a href="#" class="btn">adicionar ao carrinho</a>
         </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="300">
         <img src="images/Buger2.png" alt="">
         <div class="content">
            <div class="stars">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
            </div>
            <h3>hambúrguer com bacon</h3>
            <div class="price">R$11,00</div>
            <a href="#" class="btn">adicionar ao carrinho</a>
         </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="450">
         <img src="images/Buger3.png" alt="">
         <div class="content">
            <div class="stars">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star-half-alt"></i>
            </div>
            <h3>hambúrguer com salada</h3>
            <div class="price">R$24,00</div>
            <a href="#" class="btn">adicionar ao carrinho</a>
         </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="600">
         <img src="images/Buger4.png" alt="">
         <div class="content">
            <div class="stars">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
            </div>
            <h3>hambúrguer com molho</h3>
            <div class="price">R$19,00</div>
            <a href="#" class="btn">adicionar ao carrinho</a>
         </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="750">
         <img src="images/Buger5.png" alt="">
         <div class="content">
            <div class="stars">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>h
               <i class="fas fa-star"></i>
               <i class="fas fa-star-half-alt"></i>
            </div>
            <h3>hambúrguer completo</h3>
            <div class="price">R$25,00</div>
            <a href="#" class="btn">adicionar ao carrinho</a>
         </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="900">
         <img src="images/Buger6.png" alt="">
         <div class="content">
            <div class="stars">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star-half-alt"></i>
            </div>
            <h3>hambúrguer com picles</h3>
            <div class="price">R$15,50</div>
            <a href="#" class="btn">adicionar ao carrinho</a>
         </div>
      </div>
      
   </div>

</section>

<!-- termina a seção do menu-->

<!-- sobre o início da seção -->

<section class="about" id="about">

   <div class="image" data-aos="fade-right" data-aos-delay="150">
      <img src="images/Buger6.png" alt="">
   </div>

   <div class="content" data-aos="fade-left" data-aos-delay="300">
      <h3 class="title">Entre no paraíso do hambúrguer</h3>
      <p>Hoje é dia de comer hambúrguer: sim ou claro?
      Keep Calm e peça hambúrguer.
      Se dinheiro compra hambúrguer, ele compra felicidade.
      Não deixe para amanhã o hambúrguer que você pode comer hoje.
      Estou treinando, mas queria mesmo era um hambúrguer.
      Academia? Eu ouvi hamburgueria.</p>
      <div class="icons">
         <h3> <i class="fas fa-check"></i>MELHOR PREÇO</h3>
         <h3> <i class="fas fa-check"></i>MELHOR SERVIÇO</h3>
         <h3> <i class="fas fa-check"></i>INGREDIENTE FRESCO</h3>
         <h3> <i class="fas fa-check"></i>PÃO DE COSTAS</h3>
         <h3> <i class="fas fa-check"></i>QUEIJO NATURAL</h3>
         <h3> <i class="fas fa-check"></i>VEGANO E NÃO VEGANO</h3>
      </div>
      <a href="#" class="btn">consulte Mais informação</a>
   </div>

</section>

<!-- sobre o fim da seção --> 

<!-- seção de comentários começa -->

<section class="reviews" id="reviews">

   <div class="heading">
      <img src="images/title-img.png" alt="">
      <h3>AVALIAÇÕES</h3>
   </div>

   <div class="box-container">

      <div class="box" data-aos="fade-up" data-aos-delay="150">
         <img src="images/pic-1.jpg" alt="">
         <h3>Kenedy</h3>
         <p>Incrível gostei bastante sem falar do preço. Ótimo atendimento e hambúrgueres deliciosos.👀👍</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
         </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="300">
         <img src="images/pic-2.jpg" alt="">
         <h3>Júnior</h3>
         <p>Mano muito bom e recomendo.💯😀</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="450">
         <img src="images/pic-3.jpg" alt="">
         <h3>João</h3>
         <p>Gostei demais sem falar da velocidade de entrega. Show!🥰</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
         </div>
      </div>

   </div>

</section>

<!-- seção de comentários termina --> 

<!-- seção de contato começa -->

<section class="contact" id="contact">

   <div class="heading">
      <img src="images/title-img.png" alt="">
      <h3>NÓS ENCONTRE</h3>
   </div>

   <div class="row">

   <!--   <iframe data-aos="fade-up" data-aos-delay="150" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1639924799744!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe> -->

      <div class="form">

         <div class="icons-container">

            <div class="icons" data-aos="fade-up" data-aos-delay="150">
               <i class="fas fa-map"></i>
               <h3>endereço :</h3>
               <p>Ceará, Forquilha - 62.115.000</p>
            </div>

            <div class="icons" data-aos="fade-up" data-aos-delay="300">
               <i class="fas fa-envelope"></i>
               <h3>Email :</h3>
               <p>hambúrguer10@gmail.com</p>
               <p>Marcos Vinicius@gmail.com</p>
            </div>

            <div class="icons" data-aos="fade-up" data-aos-delay="450">
               <i class="fas fa-phone"></i>
               <h3>Telefone :</h3>
               <p>88 (55)99078-8510</p>
               <p>88 (55)99268-6714</p>
            </div>
            
         </div>

         <form action="">
            <input data-aos="fade-up" data-aos-delay="150" type="text" placeholder="nome completo" class="box">
            <input data-aos="fade-up" data-aos-delay="300" type="email" placeholder="endereço" class="box">
            <input data-aos="fade-up" data-aos-delay="450" type="number" placeholder="telefone" class="box">
            <textarea data-aos="fade-up" data-aos-delay="600" name="" placeholder="mensagem" class="box" id="" cols="30" rows="10"></textarea>
            <input data-aos="fade-up" data-aos-delay="750" type="submit" value="Enviar" class="btn">
         </form>

      </div>

   </div>

</section>

<!-- seção de contato termina --> 

<!-- seção de blogs começa -->

<section class="blogs" id="blogs">

   <div class="heading">
      <img src="images/title-img.png" alt="">
      <h3>Nossos posts</h3>
   </div>

   <div class="box-container">

      <div class="box" data-aos="fade-up" data-aos-delay="150">
         <div class="image">
            <img src="images/blog-1.jpg" alt="">
            <div class="icons">
               <a href="#"> <i class="fas fa-calendar"></i> 20 maio, 2022 </a>
               <a href="#"> <i class="fas fa-user"></i> by administrador </a>
            </div>
         </div>
         <div class="content">
            <h3>melhor hambúrguer do mês</h3>
            <p>Com melhor avaliações e pedidos pelos nossos clientes.</p>
            <a href="#" class="btn">saiba mais</a>
         </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="300">
         <div class="image">
            <img src="images/blog-2.jpg" alt="">
            <div class="icons">
               <a href="#"> <i class="fas fa-calendar"></i> 25 julho, 2022 </a>
               <a href="#"> <i class="fas fa-user"></i> by administrador </a>
            </div>
         </div>
         <div class="content">
            <h3>Hambúrguer mais pedido</h3>
            <p>O hambúrguer mais bem pedido da semana.</p>
            <a href="#" class="btn">saiba mais</a>
         </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="450">
         <div class="image">
            <img src="images/blog-3.jpg" alt="">
             <div class="icons">
               <a href="#"> <i class="fas fa-calendar"></i> 25 junho, 2022 </a>
               <a href="#"> <i class="fas fa-user"></i> by administrador </a>
            </div>
         </div>
         <div class="content">
            <h3>O com melhor avaliação de preços</h3>
            <p>Com o mais bem falado em questão de preço</p>
            <a href="#" class="btn">saiba mais</a>
         </div>
      </div>

   </div>

</section>

<!-- blogs section ends -->

<!-- footer section starts  -->

<section class="footer">

   <div class="links">
      <a href="#home" class="btn">início</a>
      <a href="#menu" class="btn">menu</a>
      <a href="#about" class="btn">sobre</a>
      <a href="#reviews" class="btn">revios</a>
      <a href="#contact" class="btn">contato</a>
      <a href="#blogs" class="btn">blogs</a>
   </div>

   <p class="credit"> Venha nós conhecer  <span> a melhor hambúrgueria da Cidade </span> | Burgueria Brutos! </p>

</section>

<!-- fim das sessões -->













<!-- links do script javascript    -->
<script src="js/script.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

<script>

AOS.init({
  //Colocar 800ms
   duration: 550,
});

</script>
    
</body>
</html>
