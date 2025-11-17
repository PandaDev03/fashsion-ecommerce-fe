import { Menu as AntMenu, MenuProps } from 'antd';
import classNames from 'classnames';
import { memo } from 'react';

const Menu = ({ className, ...props }: MenuProps) => {
  const customClass = classNames('border-e-0!', className);

  return <AntMenu className={customClass} {...props} />;
};

export default memo(Menu);
