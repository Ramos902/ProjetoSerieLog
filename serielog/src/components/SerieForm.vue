<template>
    <div class="container-serieform">
        <div class="header-serieform">
            <h1 class="titulo-form">Adicionar Série</h1>
        </div>
        <form class="form-serie" @submit.prevent="cadastrarSerie">
            <div class="campo">
                <label class="label-campo">Título da série</label>
                <input type="text" placeholder="Título da série" v-model="novaSerie.titulo" required />
            </div>

            <div class="campo">
                <label class="label-campo">Gênero da série</label>
                <input type="text" placeholder="Gênero da série" v-model="novaSerie.genero" required />
            </div>

            <div class="linha-dupla">
                <div class="campo">
                    <label class="label-campo">Nota da série</label>
                    <input type="number" placeholder="Nota da série" v-model="novaSerie.nota" min="0" max="10"
                        step="0.1" required />
                </div>

                <div class="campo">
                    <label class="label-campo">Ano de lançamento</label>
                    <input type="number" placeholder="Ano de lançamento" v-model="novaSerie.ano" min="1900"
                        max="2100" required />
                </div>
            </div>

            <label class="checkbox-assistida">
                <input type="checkbox" v-model="novaSerie.assistida" />
                Assistida
            </label>

            <button type="submit" class="btn-submit">Adicionar Série</button>
        </form>
        <button class="btn-fechar" @click="$router.push('/series')">X</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { postSerie } from '../services/seriesService';

const novaSerie = ref({
    titulo: '',
    genero: '',
    nota: null,
    ano: null,
    assistida: false
});

async function cadastrarSerie() {
    try {
        await postSerie(novaSerie.value);
        alert('Série cadastrada com sucesso!');
        window.location.href = '/series';
    } catch (error) {
        console.error('Erro ao cadastrar série:', error);
        alert('Ocorreu um erro ao cadastrar a série. Tente novamente.');
    }
}
</script>

<style scoped>
.container-serieform {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 32px;
  box-shadow: var(--shadow);
  background-color: var(--code-bg);
  color: var(--text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  filter: blur(0%);
}

.header-serieform {
  margin-bottom: 28px;
}

.titulo-form {
  font-family: var(--heading);
  font-weight: 500;
  font-size: 32px;
  color: var(--text-h);
  align-self: flex-start;
  padding-bottom: 12px;
  margin: 0;
  border-bottom: 4px solid var(--accent);
}

.form-serie {
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.label-campo {
  font-size: 13px;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.linha-dupla {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

input[type="text"],
input[type="number"] {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 10px 12px;
  color: var(--text-h);
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

input[type="text"]:focus,
input[type="number"]:focus {
  border-color: var(--accent-border);
}

.checkbox-assistida {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text);
  cursor: pointer;
}

.checkbox-assistida input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--accent);
  cursor: pointer;
}

.btn-submit {
  margin-top: 8px;
  padding: 12px 18px;
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.btn-submit:hover {
  transform: translateY(-2px);
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
}
</style>