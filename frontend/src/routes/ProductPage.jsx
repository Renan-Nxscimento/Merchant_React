import React, { useEffect, useReducer, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Fullscreen from '../components/productPage/mainPart/Fullscreen'
import Main from '../components/productPage/mainPart/Main';
import fetchApi from '../axios/config';


const ProductPage = () => {
    
    let variationName = document.getElementById('variationSelected')
    const variations = document.querySelectorAll('.variation')
    const otherImages = document.querySelectorAll('.alt-img')

    const closeFullscreen = document.querySelector('.close-fullscreen')
    const fullScreen = document.querySelector('.fullscreenImage')
    const imagoClicker = document.querySelector('.main-image')
    const mainImago = document.getElementById('mainImage')
    const fullImage = document.getElementById('fullImago')

    let imageCounter = 1

    const decreaseImage = document.getElementById('previousImage')
    const increaseImage = document.getElementById('nextImage')

    const [products, setProducts] = useState([])
    const {id} = useParams();
        
        useEffect(() => {
            const loadProducts = async () => {
            const res = await fetchApi.get(`/products`)

            setProducts(res.data)
            }

          loadProducts()
        }, [])

//Achar produto selecionado
      const selectedProduct = products.find(product => String(product._id) === id);

//Manipular imagens
      otherImages.forEach(imago => {
        imago.addEventListener('click', () => {
          document.querySelector('.img-selected')?.classList.remove('img-selected')
          imago.classList.add('img-selected')
          mainImago.src = imago.src
          imageCounter = imago.id
          console.log(imageCounter)
        })
      })

      function refreshMainImago() {
        mainImago.src = document.querySelector('.img-selected').src
      }

      function imageSetter() {
        if (imageCounter === 1) {
          document.querySelector('.img-selected')?.classList.remove('img-selected')
          otherImages[0].classList.add('img-selected')
          fullImage.src = otherImages[0].src
        } else if (imageCounter && imageCounter === 2) {
          document.querySelector('.img-selected')?.classList.remove('img-selected')
          otherImages[1].classList.add('img-selected')
          fullImage.src = otherImages[1].src
        } else if (imageCounter && imageCounter === 3) {
          document.querySelector('.img-selected')?.classList.remove('img-selected')
          otherImages[2].classList.add('img-selected')
          fullImage.src = otherImages[2].src
        } else if (imageCounter && imageCounter === 4) {
          document.querySelector('.img-selected')?.classList.remove('img-selected')
          otherImages[3].classList.add('img-selected')
          fullImage.src = otherImages[3].src
        } else if (imageCounter && imageCounter === 5) {
          document.querySelector('.img-selected')?.classList.remove('img-selected')
          otherImages[4].classList.add('img-selected')
          fullImage.src = otherImages[4].src
        }
      }

      decreaseImage?.addEventListener('click', () => {
        if (imageCounter > 1) {
          imageCounter --
          imageSetter()
          refreshMainImago()
        }
      })

      increaseImage?.addEventListener('click', () => {
        if (imageCounter < 5) {
          imageCounter ++
          imageSetter()
          refreshMainImago()
          }
      })

//Fullscreen
      imagoClicker?.addEventListener('click', () => {
        fullScreen.style.display = 'flex'
        closeFullscreen.style.display = 'flex'
        closeFullscreen.addEventListener('click', function () {
            fullScreen.style.display = 'none'
            closeFullscreen.style.display = 'none'
        })
        fullImage.src = mainImago.src
        imageCounter === diamondDogs
      })

//Selecionar variação
      variations.forEach(variation => {
          variation.addEventListener('click', () => {
              document.querySelector('.variation-selected')?.classList.remove('variation-selected')
              variation.classList.add('variation-selected')
              if (variation.id && variation.id == 1) {
                  variationName.innerHTML = selectedProduct.variations[0].variation
              } else if (variation.id && variation.id == 2) {
                  variationName.innerHTML = selectedProduct.variations[1].variation
              }  else if (variation.id && variation.id == 3) {
                  variationName.innerHTML = selectedProduct.variations[2].variation
              } else if (variation.id && variation.id == 4) {
                  variationName.innerHTML = selectedProduct.variations[3].variation
              } 
          }) 
      })

  return (
    <>
      {selectedProduct ? (  
          <Main selectedProduct={selectedProduct}/>
      ) : (
        <p>Loading...</p>
      )}
      <Fullscreen/>
    </>
  );
};

export default ProductPage
