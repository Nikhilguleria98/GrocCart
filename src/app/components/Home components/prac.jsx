<div className='responsivewidth mt-10 flex flex-col gap-5 md:flex-row items-center justify-center'>

<div className='w-full md:w-1/2'>
<div className=' max-h-[70vh] max-w-sm  bg-red-600 rounded-t-full overflow-hidden '>
    <img src="./banner.png" alt="" className=''/>
   
</div>
</div>


<div className=' w-full md:w-1/2'>
      {
        features.map((item,index)=>(
            <div key={index}>
                <img src={item.icon} alt="" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>

            </div>
        ))
      }
    </div>
</div>