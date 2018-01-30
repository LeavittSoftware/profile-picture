declare namespace Polymer {
  function LazyImportsMixin<T extends new (...args: any[]) => {}>(base: T): LazyImportsMixinConstructor&T;

  interface LazyImportsMixinConstructor {
    new(...args: any[]): LazyImportsMixin;
  }

  interface LazyImportsMixin {
    importLazyGroup(groupName: string): Promise<ImportLazyGroupResult>;
  }

  interface ImportLazyGroupResult {
    failed: Array<string>;
    loaded: Array<string>;
  }
}