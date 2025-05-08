const handleCopy = (e) => {
  console.log("clicked")
  console.log(e)
  const target = e.currentTarget 
  const text = target?.innerText || '';
  //@ts-ignore
  const name = e.currentTarget.dataset?.name || '';

  navigator.clipboard.writeText(text);
  alert(` ${name} کپی شد ✅`)
}