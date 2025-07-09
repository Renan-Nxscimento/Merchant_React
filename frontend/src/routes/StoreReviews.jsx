
import Review from '../components/storeReviews/Review'
import QualitiesString from '../components/home/QualitiesString'
import FeaturedProducts from '../components/home/FeaturedProducts'

import '../components/storeReviews/review.css'

const StoreReviews = () => {
    const reviews = [
    { 
    _id: 1, 
    rating: 5, 
    customer: "André Castro", 
    customerimage: "", 
    date: "15 de Outubro de 2024", 
    text: "Atendimento impecável! Fui muito bem recebido e todas as minhas dúvidas foram respondidas com clareza e paciência. Recomendo a loja Merchant a todos!" 
    },
    { 
    _id: 2, 
    rating: 4, 
    customer: "Beatriz Silva", 
    customerimage: "", 
    date: "12 de Outubro de 2024", 
    text: "Loja organizada e com ótimos preços. O atendimento foi atencioso e eficiente. Recomendo!" 
    },
    { 
    _id: 3, 
    rating: 5, 
    customer: "Carlos Santos", 
    customerimage: "", 
    date: "10 de Outubro de 2024", 
    text: "Experiência de compra incrível! Desde o atendimento online até a entrega, tudo foi perfeito. A loja é muito profissional e recomendo demais!" 
    },
    { 
    _id: 4, 
    rating: 3, 
    customer: "Daniela Oliveira", 
    customerimage: "", 
    date: "05 de Outubro de 2024", 
    text: "Poderia ser melhor. O atendimento foi bom, mas a loja estava um pouco desorganizada. Precisa melhorar nesse aspecto." 
    },
    { 
    _id: 5, 
    rating: 5, 
    customer: "Eduardo Pereira", 
    customerimage: "", 
    date: "02 de Outubro de 2024", 
    text: "Atendimento excelente, equipe muito simpática e prestativa! Recomendo a loja Merchant a todos que buscam um ótimo atendimento e produtos de qualidade."
    },
    { 
    _id: 6, 
    rating: 3, 
    customer: "Big Boss", 
    customerimage: "https://i.pinimg.com/736x/57/63/35/5763355e76ea70c03b1b0ca1f1dfc71e.jpg", 
    date: "05 de Outubro de 2024", 
    text: "Poderia ser melhor. O atendimento foi bom, mas a loja estava um pouco desorganizada. Precisa melhorar nesse aspecto." 
    }
  ]

  return (
    <div className="adjust-screen">
      <section id='storeReviews' className='d-flex align-items-center flex-column'>
          <h3 className="big-text">Feedbacks</h3>
          {
              reviews.map(review => (
                  <>
                  <Review key={review.id} review={review}/>
                  <div className="slash"></div>
                  </>
              ))
          }
      </section>
      <QualitiesString/>
      <FeaturedProducts/>
    </div>
  )
}

export default StoreReviews
