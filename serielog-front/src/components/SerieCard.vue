<template>
    <div class="container-seriecard" v-if="serie">
        <button class="btn-fechar" @click="$router.push('/series')">X</button>
        <div class="info-seriecard">
            <h2 class="titulo-seriecard">{{ serie.titulo }}</h2>
            <p class="genero-seriecard">Gênero: {{ serie.genero }}</p>
            <p class="nota-seriecard">Nota: {{ serie.nota }}</p>
            <p class="ano-seriecard">Ano: {{ serie.ano }}</p>
            <p class="assistida-seriecard">Assistida: {{ serie.assistida ? 'Sim' : 'Não' }}</p>
        </div>
        <div class="acoes-seriecard">
            <button class="btn-editar" @click="$router.push(`/series/${serie.id}/editar`)">Editar</button>
            <button class="btn-excluir" @click="excluirSerie()">Excluir</button>
        </div>
    </div>
    <div class="container-seriecard" v-else>Carregando...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getSerie, deleteSerie } from '../services/seriesService';

const route = useRoute();
const router = useRouter();
const serie = ref(null);

onMounted(async () => {
    serie.value = await getSerie(route.params.id);
});

async function excluirSerie() {
    try {
        await deleteSerie(serie.value.id);
        alert('Série deletada com sucesso!');
        router.push('/series');
    } catch (error) {
        console.error('Erro ao deletar série:', error);
        alert('Ocorreu um erro ao deletar a série. Tente novamente.');
    }
}

</script>

<style scoped>
.container-seriecard {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 28px;
  width: 100%;
  max-width: 420px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.btn-fechar {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 18px;
  color: var(--text);
  cursor: pointer;
  transition: color 0.2s;
}

.btn-fechar:hover {
  color: var(--accent);
}

.info-seriecard {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 8px;
}

.titulo-seriecard {
  font-family: var(--heading);
  font-size: 1.5em;
  font-weight: 600;
  color: var(--text-h);
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 4px solid var(--accent);
}

.genero-seriecard {
  font-size: 13px;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

.nota-seriecard {
  color: var(--accent);
  font-weight: 600;
  font-size: 14px;
  margin: 0;
}

.ano-seriecard {
  color: var(--text);
  font-size: 14px;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--social-bg);
  margin: 0;
  align-self: flex-start;
}

.assistida-seriecard {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  align-self: flex-start;
}

.acoes-seriecard {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.btn-editar,
.btn-excluir {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.2s, filter 0.2s;
}

.btn-editar {
  color: var(--accent);
  background: var(--accent-bg);
  border-color: var(--accent-border);
}

.btn-excluir {
  color: var(--error, #e05555);
  background: var(--error-bg, rgba(224, 85, 85, 0.1));
  border-color: var(--error-border, rgba(224, 85, 85, 0.3));
}

.btn-editar:hover,
.btn-excluir:hover {
  filter: brightness(1.15);
  transform: translateY(-2px);
}
</style>
