<template>
  <main>
    <h1>Bem-vindo ao SerieLog</h1>
    <span>Integrantes: João Pedro Ramos Moraes & Fernando Costa de Almeida</span>
    <SerieList />

    <input type="text" placeholder="Nome da série" v-model="novaSerie.titulo" />
    <button @click="cadastrarSerie">Adicionar Série</button>
  </main>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import SerieList from './components/SerieList.vue';
  const novaSerie = ref({ titulo: '' });

  async function cadastrarSerie() {
    if (novaSerie.value.titulo.trim() === '') {
      alert('O título da série não pode ser vazio.');
      return;
    }

    try {
      const response = await postSerie(novaSerie.value);
      console.log('Série adicionada:', response);
      series.value.push(response); // Adiciona a nova série à lista
      novaSerie.value.titulo = ''; 
    } catch (error) {
      console.error('Erro ao adicionar série:', error);
    }
  }

</script>
