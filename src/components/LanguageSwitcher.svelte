<script lang="ts">
    import { language } from '../assets/language';
    let selectedLanguage: string;

    $: selectedLanguage = $language;
    function changeLanguage(lang: string) {
        language.set(lang);
    }
</script>

<div class="flex space-x-4">
    <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => changeLanguage('en')}>
        English
    </button>
    <button class="px-4 py-2 bg-green-500 text-white rounded" on:click={() => changeLanguage('gr')}>
        Ελληνικά
    </button>
</div>