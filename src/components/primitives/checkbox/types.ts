import type { ForceMountable } from '@/components/primitives';

interface CheckboxRootProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
}

type CheckboxIndicator = ForceMountable;

export type { CheckboxRootProps, CheckboxIndicator };
