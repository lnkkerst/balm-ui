import { computed } from 'vue';

const iconProps = {
  icon: {
    type: String,
    default: ''
  }
};

function useMaterialIcon(props) {
  const materialIcon = computed(() => props.icon || false).value;

  return { materialIcon };
}

export { iconProps, useMaterialIcon };
