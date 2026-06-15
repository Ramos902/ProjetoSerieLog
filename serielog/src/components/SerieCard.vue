<template>
    <div class="container-seriecard">
        <button class="btn-fechar" @click="$emit('close')">Fechar</button>        
        <div class="info-seriecard">
            <h2 class="titulo-seriecard">{{ serie.titulo }}</h2>
            <p class="genero-seriecard">Gênero: {{ serie.genero }}</p>
            <p class="nota-seriecard">Nota: {{ serie.nota }}</p>
            <p class="ano-seriecard">Ano: {{ serie.ano }}</p>
            <p class="assistida-seriecard">Assistida: {{ serie.assistida ? 'Sim' : 'Não' }}</p>
        </div>
        <div class="acoes-seriecard">
            <button class="btn-editar" @click="$emit('edit')">Editar</button>
            <button class="btn-excluir" @click="$emit('delete')">Excluir</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { deleteSerie } from '../services/seriesService';

    try {
        
    }
    
</script>

<style scoped>

</style>