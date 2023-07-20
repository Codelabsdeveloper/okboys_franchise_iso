import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';

const { Sider } = Layout;
const items2 = [
  {
    icon: UserOutlined,
    label: 'Dashboard',
    children: [{ label: 'Dashboard', route: '/dashboard' }]
  },
  {
    icon: LaptopOutlined,
    label: 'Delivery Boys',
    children: [
      { label: 'Add', route: '/addDeliveryBoy' },
      { label: 'List', route: '/listDeliveryBoy' },
      // Add more menu items with the "route" property
    ],
  },
  {
    icon: NotificationOutlined,
    label: 'Profile',
    children: []
  },
];

function SideBar() {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <Sider width={200} className="fixed bg-white overflow-auto left-0 h-screen pb-16">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        className="h-full border-r-0 hover:text-red"
      >
        {items2.map((item, index) => (
          <Menu.SubMenu
            key={`sub${index + 1}`}
            icon={React.createElement(item.icon)}
            title={item.label}
          >
            {item.children.length > 0 ? item.children.map((child) => (
              <Menu.Item 
                  key={child.label} 
                  onClick={() => handleClick(child.route)}
                  
              >
                {child.label}
              </Menu.Item>
            )) : ""}
          </Menu.SubMenu>
        ))}
      </Menu>
    </Sider>
  );
}

export default SideBar;
