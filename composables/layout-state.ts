interface LayoutState {
  pageTitle: string;
}

export const useLayoutState = () => {
  const layoutState = useState<LayoutState>("layout-state", () => ({
    pageTitle: "",
  }));

  const setLayoutState = (data: LayoutState) => {
    layoutState.value = data;
  };

  return { layoutState, setLayoutState };
};
