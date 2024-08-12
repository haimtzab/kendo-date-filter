<script setup lang="ts">
import { ref } from 'vue';
import { GridColumnMenuFilter } from '@progress/kendo-vue-grid';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import operators from './operators';

interface IProps {
    column: any[];
    filterable?: boolean;
    filter?: CompositeFilterDescriptor | undefined;
}

withDefaults(defineProps<IProps>(), {
    filterable: true,
    filter: undefined,
});

const filterOperators = ref(operators);
</script>
<template>
    <GridColumnMenuFilter
        :column="column"
        :filterOperators="filterOperators"
        expanded
        hideSecondFilter
    />
</template>
<style lang="scss"></style>
