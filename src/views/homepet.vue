<template>
<div class="bg-[#F4EFDF] w-full h-full flex fixed items-start">
    <form class="max-w-sm w-full mx-auto">
      <div class="flex justify-center items-start">
        <img src="/public/petfood.png" class="h-40 w-40 mt-5" alt="Flowbite Logo" />
      </div>
      <div class="mb-2">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >อีเมล</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="example@gmail.com"
          required
        />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >รหัสผ่าน</label
        >
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex">
          <a href="/signup"><label for="remember" class="text-blue-700 text-sm font-medium dark:text-gray-300"
            >สมัครสมาชิก</label></a>
          <label
            for="remember"
            class="ms-60 text-sm flex justify-end font-medium text-blue-700 dark:text-gray-300"
            >ลืมรหัสผ่าน</label
          >
        </div>
      </div>
      <button
        type="submit"
        class="text-white bg-[#771011] focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        เข้าสู่ระบบ
      </button>
      <div
        class="flex items-center mt-3 justify-center bg-white focus:ring-4 focus:outline-none focus:ring-black rounded-lg w-full px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-4"
      >
        <img src="/public/google.svg" alt="" class="w-5 h-5" />
        <button>
          <span class="text-center text-black font-medium text-sm"> เข้าสู่ระบบด้วย google </span>
        </button>
      </div>
      <div
        class="flex items-center mt-3 justify-center bg-blue-700 focus:ring-4 focus:outline-none focus:ring-black rounded-lg w-full px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-4"
      >
        <img src="/public/facebook.svg" alt="" class="w-6 h-6" />
        <button>
          <span class="text-center text-white font-medium text-sm"> เข้าสู่ระบบด้วย facebook </span>
        </button>
      </div>
    </form>
  </div>
  <Footer1></Footer1>
</template>

<script>
export default {
    name:"homepet"
}
</script>