<script>
    import { Card, Button, Toggle } from 'flowbite-svelte';
    import '../../public/3js.webp'
    import '../../public/form.webp'
    import '../../public/lexir.webp'
    import '../../public/merchandise.webp'
    import '../../public/next.webp'
    let hCard = false;
</script>

<div id="projects" class="grid gap-8 mx-auto my-6 justify-center scroll-mt-36 lg:w-[80%] lg:px-10 py-10 sm:w-[60%]">
    <!-- First Row -->
    <div class="grid grid-cols-3 gap-8">
        <Card class=" w-full h-auto" img="/3js.webp" href="https://3js-portfolio-psi.vercel.app/" target="_blank" horizontal size="md">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">3js Portfolio</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">A portfolio page utilizing 3js library</p>
        </Card>
        <Card class="w-full h-auto" img="/form.webp" href="https://form-eta-five.vercel.app/" target="_blank" horizontal size="md">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Patients form</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">A simple patients form with react ant Ts</p>
        </Card>
        <Card class="w-full h-auto" img="/lexir.webp" href="https://lexir-io-challenge-grigpasch.vercel.app/" target="_blank" horizontal size="md">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Drink Brand</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">A page of a drink brand made with react</p>
        </Card>
    </div>

    <!-- Second Row -->
    <div class="grid grid-cols-2 gap-8 mt-6">
        <Card class="w-full h-auto" img="/merchandise.webp" href="https://merchandise-psi.vercel.app/ " target="_blank" horizontal size="md">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Merchandise Website</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">An E-Commerce website, utilizing MERN Stack</p>
        </Card>
        <Card class="w-full h-auto" img="/next.webp" href="https://next-js-portfolio-eta.vercel.app/" target="_blank" horizontal size="md">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Next.js Portfolio</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">A portfolio page utilizing Next.js</p>
        </Card>
    </div>
</div>