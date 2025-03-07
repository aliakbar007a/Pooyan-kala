import React, {  useEffect, useState } from 'react';
import './CartPage.css'
import Swal from 'sweetalert2';

const CartPage = () => {
  const [cartItems, setCartItems] = useState( [] );
  const [discountCode, setDiscountCode] = useState('');
  const [totalPrice, setTotalPrice] = useState(0); // قیمت کل اولیه
  const [discountApplied, setDiscountApplied] = useState(false);

  //fetc data from localStorage
  useEffect(() => {
    const dataCart = localStorage.getItem("cartItems")
    const parsedCart = JSON.parse(dataCart)
    
    setCartItems(parsedCart)
  }, [])
 
  // اعمال کد تخفیف
  const applyDiscount = () => {
    if (discountApplied) {
      discountAlert("alert")
      setDiscountCode("")
    } else {
      if (discountCode === 'DISCOUNT10') {
        const discountAmount = totalPrice * 0.1; // 10 درصد تخفیف
        setTotalPrice(totalPrice - discountAmount);
        setDiscountApplied(true);
        discountAlert("discount")
        setDiscountCode("")
      } else {
        discountAlert("err")
        setDiscountCode("")
      }
    };
  }

  // حذف آیتم از سبد خرید
  const deleteAlert =(id)=>{
    Swal.fire({
      title: "آیا مطمئن هستید ؟",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);

        localStorage.setItem("cartItems", JSON.stringify(updatedCart))
        if (updatedCart.length === 0) {
      setTotalPrice(0);
      }
        Swal.fire({
          title: "حذف شد!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
// محاسبه کل سبد خرید
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total)

    if (total < 0) {

      setTotalPrice(0)
    }

  }, [cartItems])

//تغییر تعداد محصول
  const changeHandlerQuanity = (number, id) => {
    const updatecart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: number }
      }
      return item
    })
    setCartItems(updatecart)
    localStorage.setItem("cartItems", JSON.stringify(updatecart))


  }
 // alert discount
  const discountAlert = (massage)=>{
    if(massage == "err"){
      Swal.fire({
        icon: "error",
        title: "کد تخفیف معتبر نیست",
        text: "Something went wrong!",
       
      });
    }else if(massage == "alert"){
      Swal.fire({
        title: "کد تخفیف قبلا اعمال شده",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }else if(massage == 'discount'){
      Swal.fire({
        title: "انجام شد",
        icon: "success",
        draggable: true
      });
    }
  }
  const updateBoxAlert =()=>{
                   Swal.fire({
                      title: "سبد خرید بروزرسانی شد",
                      text:  "انجام شد",
                      icon: "success"
                   })
                 }
  return (
    <div>
    
          <div className='containerCartPage'>
            <div className='headcartpage'>
              <ul>
                <li>مجموع</li>
                <li>تعداد</li>
                <li>قیمت</li>
                <li>محصول</li>
                <li>حذف</li>
              </ul>
            </div>
            <div className='midlecartpage'>
             
              {
               cartItems.map((item) => 
                  <ul key={item.id}>
                    <li> {item.price * item.quantity}تومان</li>
                    <li><input className='numberInput' type="number" value={item.quantity} onChange={(e) => { changeHandlerQuanity(Number(e.target.value), item.id) }} /> </li>
                    <li>{item.price} تومان</li>
                    <li className='itemname'>{item.name}</li>
                    <li><button onClick={() => deleteAlert(item.id)}>حذف</button></li>
                  </ul>
                )
              }
            </div> 
           
            <div className='discountcart'>
              <div>
              <input type="text" placeholder='کد تخفیف' onChange={(e) => setDiscountCode(e.target.value)} value={discountCode}/>
              <button onClick={applyDiscount} className="dodiscount"> اعمال کد تخفیف</button>
              <p> جمع سبد خرید : {totalPrice} تومان</p>
              </div>
              <div>
              <button onClick={() => updateBoxAlert()} className="updatecartpage"> به روزرسانی سبد خرید</button>

              </div>
            </div>

          </div>


        
    </div>
  );

};

export default CartPage;