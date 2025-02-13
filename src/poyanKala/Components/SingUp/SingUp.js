import { useState } from 'react'
import './SingUp.css'
import { Link } from 'react-router-dom'
export const SingUp = ()=>{
    const [name , setName] = useState('')
    const [phone , setPhone] = useState("")
    const [errors , setErrors] = useState({})

    const validateForm = ()=>{
        let formErrors = {};

        if(name.length < 3){
            formErrors.name = 'نام باید حداقل 3 حرف باشد'
        }
       if(phone.length < 11 || phone.length > 11) {
        formErrors.phoneNumber = 'شماره موبایل نامعتبر است'
       }
       if(!phone.startsWith("09")){
        formErrors.phone = 'شماره موبایل باید با 09 شروع شود'
    }
   
    setErrors(formErrors)
    }
    const handelSubmit = ()=>{
        // e.preventDefault();
        if(validateForm()){
            
            alert('ثبت نام با موفقیت انجام شد');
            
        }
    }
    return(
        <div className='body'>
            <h1 className='tt'><span className='poyan'>پویان</span> کالا</h1>
            <div className='singingpage'>
                <div className='headerLogsing'>
                <h2 className='singin'>عضویت</h2>
                <hr className='hr'/>
                </div>
                <div className='bodysing'>
                <h3 className='phonesing'> :شماره موبایل</h3>
                <input className='inputNumbersing' placeholder='09123456789' onChange={(e)=>{setPhone(e.target.value)}}/>
                {errors.phone && <span className='errnote'>{errors.phone}</span>},
                {errors.phoneNumber && <span className='errnote'>{errors.phoneNumber}</span>}
                <h3 className='phonesing'> :نام </h3>
                <input className='inputNumbersing' placeholder='علی' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                {errors.name && <span className='errnote'>{errors.name}</span>}
                <h3 className='phonesing'> :ایمیل(اختیاری) </h3>
                <input className='inputNumbersing' placeholder='GOOGLE@GMAIL.COM' />
                <p className='notesing'>یک رمز به نشانی ایمیل شما فرستاده خواهد شد</p>
                <p className='notesing'> اطلاعات شخصی شما برای پردازش سفارش شما استفاده میشود و پشتیبانی از تجربه شما 
                    در این وبسایت و برای اهداف دیگری که در سیاست حفظ حریم خصوصی توضیح داده شده است
                </p>
                <button className='btnsing' onClick={()=>{handelSubmit()}}> عضویت  </button>
                </div>
                <div className='fotersing'>
                <p className='foternote' >کاربر جدید هستید؟  <Link to="/login" >وارد شوید</Link></p>
                
                <Link to="/" className='backToPage'>برگشت به صفحه اصلی</Link>
                </div>
            </div>
        </div>
    )
}