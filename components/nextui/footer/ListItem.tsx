type ListItemProps = {
  children: React.ReactNode;
};

const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <li className="mb-2">{children}</li>
);

export default ListItem;
