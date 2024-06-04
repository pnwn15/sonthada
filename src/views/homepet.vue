<template>
<!-- component -->
<div class="bg-[#F4EFDF] w-full h-full flex fixed items-start">
<!-- component -->
<body class="font-mono bg-gray-400 ">
		<!-- Container -->
		<div class="container mx-auto mt-6 ">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
          
					>
          <img class="h-full" src="/dog4.jpg" alt="">
          </div>
					<!-- Col -->
					<div class="w-full lg:w-1/2  bg-white p-5 rounded-lg lg:rounded-l-none">
          <div class="w-full flex justify-center">
            <img class="w-20  flex justify-center items-center" src="/petfood.png" alt="">
            </div>
						<h3 class="pt-4 text-2xl text-center">ล็อคอินเข้าสู่ระบบ</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="Email">
									อีเมล
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="Email"
									placeholder="Email"
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									รหัสผ่าน
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
								/>
								
							</div>
							<div class="mb-4">
								<input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label class="text-sm" for="checkbox_id">
									Remember Me
								</label>
							</div>
							<div class="mb-3 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-[#771011] rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									เข้าสู่ระบบ
								</button>
							</div>
							<div class="mb-3 text-center">
								<button
									class="w-full px-4  py-2 font-bold text-black bg-gray-200 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									ดำเนินการต่อกับ Google
								</button>
							</div>
							<div class="mb-3 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
                
									ดำเนินการต่อกับ Facebook
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="/signup"
								>
									สมัครบัญชี
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									ลืมรหัสผ่าน
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</body>
  
  </div>
</template>

<script>

export default {
    name:"homepet"
}

</script>