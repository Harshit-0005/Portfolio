export class CustomSplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  elements: HTMLElement[] = [];
  originalHTML: string[] = [];

  constructor(target: string | Element | (string | Element)[], options?: { type?: string, linesClass?: string }) {
    let targets: HTMLElement[] = [];
    if (typeof target === 'string') {
      targets = Array.from(document.querySelectorAll(target)) as HTMLElement[];
    } else if (target instanceof Element) {
      targets = [target as HTMLElement];
    } else if (Array.isArray(target)) {
      target.forEach(t => {
        if (typeof t === 'string') {
          targets = targets.concat(Array.from(document.querySelectorAll(t)) as HTMLElement[]);
        } else if (t instanceof Element) {
          targets.push(t as HTMLElement);
        }
      });
    }

    this.elements = targets;

    targets.forEach((el, i) => {
      this.originalHTML[i] = el.innerHTML;
      const text = el.textContent || '';
      el.innerHTML = '';
      
      const isWords = options?.type?.includes('words');
      const isChars = options?.type?.includes('chars');
      
      const words = text.split(/(\s+)/); 
      
      words.forEach(word => {
        if (word.match(/^\s+$/)) {
          el.appendChild(document.createTextNode(word));
        } else {
          const wordContainer = document.createElement('span');
          wordContainer.style.display = 'inline-block';
          wordContainer.style.whiteSpace = 'nowrap';
          
          if (isWords && !isChars) {
            const wrapper = document.createElement('span');
            wrapper.style.display = 'inline-flex';
            wrapper.style.overflow = 'hidden';
            wrapper.style.verticalAlign = 'top';
            if (options?.linesClass) {
               wrapper.classList.add(...options.linesClass.split(' '));
            }
            
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.textContent = word;
            
            wrapper.appendChild(wordSpan);
            wordContainer.appendChild(wrapper);
            this.words.push(wordSpan);
          } else if (isChars) {
            const chars = word.split('');
            chars.forEach(char => {
              const wrapper = document.createElement('span');
              wrapper.style.display = 'inline-flex';
              wrapper.style.overflow = 'hidden';
              wrapper.style.verticalAlign = 'top';
              if (options?.linesClass) {
                 wrapper.classList.add(...options.linesClass.split(' '));
              }
              
              const charSpan = document.createElement('span');
              charSpan.style.display = 'inline-block';
              charSpan.textContent = char;
              
              wrapper.appendChild(charSpan);
              wordContainer.appendChild(wrapper);
              this.chars.push(charSpan);
            });
          } else {
            wordContainer.textContent = word;
          }
          el.appendChild(wordContainer);
        }
      });
    });
  }

  revert() {
    this.elements.forEach((el, i) => {
      el.innerHTML = this.originalHTML[i] || '';
    });
    this.chars = [];
    this.words = [];
  }
}
