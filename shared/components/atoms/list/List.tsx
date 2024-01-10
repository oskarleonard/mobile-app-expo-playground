import type { FlashListProps } from '@shopify/flash-list';
import { FlashList } from '@shopify/flash-list';
import React from 'react';

import { ExpandingView } from '~/shared/components/atoms/expandingView/ExpandingView';

const List = <T,>({
  className,
  data,
  renderItem,
  keyExtractor,
  estimatedItemSize,
}: ListProps<T>) => {
  return (
    <ExpandingView className={className}>
      <FlashList
        data={data}
        estimatedItemSize={estimatedItemSize}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </ExpandingView>
  );
};

interface ListProps<T> extends FlashListProps<T> {
  className?: string;
}

export { List };
