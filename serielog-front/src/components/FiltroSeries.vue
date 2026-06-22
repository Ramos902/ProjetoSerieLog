<template>
  <div class="filtro-container">
    <input
      class="filtro-busca"
      type="text"
      placeholder="Buscar por título..."
      :value="modelValue.busca" 
      @input="emit('update:modelValue', { ...modelValue, busca: $event.target.value })"
    />

    <select
      class="filtro-select"
      :value="modelValue.genero"
      @change="emit('update:modelValue', { ...modelValue, genero: $event.target.value })"
    >
      <option value="">Todos os gêneros</option>
      <option v-for="g in generosUnicos" :key="g" :value="g">{{ g }}</option>
    </select>

    <select
      class="filtro-select"
      :value="modelValue.assistida"
      @change="emit('update:modelValue', { ...modelValue, assistida: $event.target.value })"
    >
      <option value="">Todas</option>
      <option value="sim">Assistidas</option>
      <option value="nao">Não assistidas</option>
    </select>

    <button
      v-if="temFiltroAtivo"
      class="filtro-limpar"
      @click="limpar"
    >
      Limpar filtros
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  series: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:modelValue']);

const FILTRO_VAZIO = { busca: '', genero: '', assistida: '' };

const generosUnicos = computed(() => {
  const set = new Set(props.series.map(s => s.genero).filter(Boolean));
  return [...set].sort();
});

const temFiltroAtivo = computed(() =>
  Object.values(props.modelValue).some(v => v !== '')
);

function limpar() {
  emit('update:modelValue', { ...FILTRO_VAZIO });
}
</script>

<style scoped>
.filtro-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 24px;
}

.filtro-busca,
.filtro-select {
  padding: 8px 12px;
  font-size: 14px;
  background: var(--code-bg);
  color: var(--text-h);
  border: 1px solid var(--border);
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s;
}

.filtro-busca {
  flex: 1 1 200px;
  min-width: 160px;
}

.filtro-select {
  flex: 0 0 auto;
  cursor: pointer;
}

.filtro-busca:focus,
.filtro-select:focus {
  border-color: var(--accent-border);
}

.filtro-limpar {
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}

.filtro-limpar:hover {
  color: var(--accent);
  border-color: var(--accent-border);
}
</style>