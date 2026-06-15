<template>
  <div class="container-serielist">
    <template v-if="loading">
      <h1 class="titulo-loading">SerieLog</h1>
      <p class="texto-loading">Carregando séries...</p>
    </template>

    <template v-else>
      <div class="header-lista">
        <h1 class="titulo-lista">Lista de Séries</h1>
        <router-link to="/series/nova">
          <button>Adicionar Série</button>
        </router-link>
      </div>
      <div class="list-series">
        <div class="card-serie" v-for="serie in series" :key="serie.id">
          <div class="card-header">
            <span class="titulo-serie">{{ serie.titulo }}</span>
            <span class="genero-serie">{{ serie.genero }}</span>
          </div>

          <div class="card-info">
            <span class="nota-serie">★ {{ serie.nota }}</span>
            <span class="ano-serie">{{ serie.ano }}</span>
          </div>

          <span class="assistida-serie"
            :class="{ 'assistida-sim': serie.assistida, 'assistida-nao': !serie.assistida }">
            {{ serie.assistida ? 'Assistida' : 'Não assistida' }}
          </span>
        </div>
      </div>
    </template>

    <SerieModal v-if="serieSelecionada" :serie="serieSelecionada" @close="serieSelecionada = null" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getSeries } from '../services/seriesService';

const series = ref([]);
const loading = ref(true);

onMounted(async () => {
  series.value = await getSeries();
  console.log('Séries carregadas:', series.value);
  loading.value = false;
});
</script>

<style scoped>
.container-serielist {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
  color: var(--text);
  background: var(--bg);
}

.header-lista {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.titulo-loading {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
  letter-spacing: -1px;
  margin: 0 0 4px;
}

.texto-loading {
  color: var(--text);
  font-size: 14px;
}

.titulo-lista {
  font-family: var(--heading);
  font-weight: 500;
  font-size: 32px;
  color: var(--text-h);
  align-self: flex-start;
  padding-bottom: 12px;
  margin: 0 0 28px;
  border-bottom: 4px solid var(--accent);
}

.list-series {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.card-serie {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  background-color: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 18px;
  text-align: left;
  box-shadow: var(--shadow);
  transition: border-color 0.2s, transform 0.2s;
  cursor: pointer;
}

.card-serie:hover {
  border-color: var(--accent-border);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.titulo-serie {
  font-size: 1.15em;
  font-weight: 600;
  color: var(--text-h);
}

.genero-serie {
  font-size: 13px;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-info {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.nota-serie {
  color: var(--accent);
  font-weight: 600;
}

.ano-serie {
  color: var(--text);
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--social-bg);
}

.assistida-serie {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid transparent;
}

.assistida-sim {
  color: var(--success);
  background: var(--success-bg);
  border-color: var(--success-border);
}

.assistida-nao {
  color: var(--accent);
  background: var(--accent-bg);
  border-color: var(--accent-border);
}
</style>