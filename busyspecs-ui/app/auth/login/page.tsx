


function page() {
  return (
    <div className="relative flex justify-center items-center h-[100vh] b bg-[url('/images/undraw_login_re_4vu2.svg')] bg-contain bg-no-repeat bg-left-bottom">
      <div className="flex items-center justify-center rounded flex-col w-[500px] h-[500px] py-8 bg-[#dadada6d] backdrop-filter backdrop-blur-md backdrop-saturate-50">
          <h1 className="text-[30px] font-bold">
            Welcome Back !
        </h1>
        <div className="w-3/4 mt-4">
          <form className="">
            <div className="mb-4">
              <label className="text-sm mb-2">Email</label>
            <input className="rounded w-full px-2 py-3 bg-transparent border-2 border-black-800" type="text" name="email" placeholder="Email" />
           </div>
            <div className="mb-4" >
            <label className="text-sm mb-2">Password</label>
            <input className="rounded w-full px-2 py-3 bg-transparent border-2 border-black-800"  type="text" name="password" placeholder="Password" />
           </div>
            <button className="rounded w-full bg-[var(--pr-col)] hover:bg-black py-3 text-white font-bold">Login</button>
            
          </form>
          <div className="mt-4">
            <span>Don't have an account? </span> <button className="text-[#43007E]">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page