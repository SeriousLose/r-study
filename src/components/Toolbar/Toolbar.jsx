import ThemedButton from './ThemedButton';
// 中间的组件再也不必指明往下传递 theme 了。
export default function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
