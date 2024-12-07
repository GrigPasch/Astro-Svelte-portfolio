<script>
    import { socials} from '../../assets/data';
    import { info, locales } from '../../assets/data.gr'

    let pathname = '/'; // Default value
</script>

<nav class="w-full h-16 bg-black text-white flex items-center px-4 py-4 top-0 z-50 md:justify-between xs:justify-center fixed">
    <ul
        class="justify-items-center xl:basis-[10%] md:basis-[15%] md:grid xs:hidden xxs:hidden"
        style="grid-template-columns: repeat({socials.length}, minmax(0, 1fr));"
    >
        {#each socials as social}
            <li>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href={social.link} target="_blank" class="cursor-pointer">
                    <i class={social.logo}></i>
                </a>
            </li>
        {/each}
    </ul>
    
    <ul
        
        class="justify-items-center xl:basis-[10%] md:basis-[15%] md:grid"
        style="grid-template-columns: repeat({locales.length}, minmax(0, 1fr));"
    >
    {#if pathname === '/'}
        {#each locales as l}
            <li>
                <a class="text-[18px] font-semibold xxs:text-[14px]" href={l.link} target="">{l.text}</a>
            </li>
        {/each}
    {/if}
    </ul>

    <ul
        class="grid justify-items-center gap-x-3 xl:basis-[25%] md:basis-[40%] sm:basis-[60%] xs:basis-[85%] xxs:basis-[100%]"
        style="grid-template-columns: repeat({info.length + 1}, minmax(0, 1fr));"
    >
        <li>
            <a class="text-[18px] font-semibold" href="#home">ΑΡΧΙΚΉ</a>
        </li>

        {#if pathname === '/'}
            {#each info as i}
                <li>
                    <a class="text-[18px] font-semibold" href={`#${i.text.toLowerCase()}`}>{i.text}</a>
                </li>
            {/each}
        {/if}
    </ul>
</nav>