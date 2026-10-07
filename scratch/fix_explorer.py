import os, re, subprocess

# 1. Restore InteractiveExplorer.tsx to clean git state
subprocess.run(['git', 'checkout', 'src/components/InteractiveExplorer.tsx'], check=True)

path = r'src/components/InteractiveExplorer.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# 2. Update imports: remove Download, ArrowRight, ShoppingBag
text = re.sub(
    r'import\s*\{\s*Search,\s*Check,\s*Download,\s*ChevronRight,\s*ArrowRight,\s*Eye,\s*Table,\s*Grid,\s*Info,\s*Sparkles,\s*X,\s*Compass,\s*ShoppingBag\s*\}\s*from\s*\'lucide-react\';',
    "import {\n  Search, Check,\n  ChevronRight, Eye, Table, Grid, Info, Sparkles, X, Compass\n} from 'lucide-react';",
    text
)

# 3. Remove selectedProduct state
text = re.sub(
    r'\s*// Selected for Detailed CAD & Spec Drawer\s*const \[selectedProduct, setSelectedProduct\] = useState<ProductItem \| null>\(null\);',
    '',
    text
)

# 4. Remove Quick View button on card image
text = re.sub(
    r'\s*\{/\* Quick View Button \*/\}\s*<button\s*onClick=\{\(\) => setSelectedProduct\(product\)\}[\s\S]*?<\/button>',
    '',
    text
)

# 5. Remove onClick and cursor from h3 title
text = re.sub(
    r'<h3\s*onClick=\{\(\) => setSelectedProduct\(product\)\}\s*style=\{\{([\s\S]*?)\s*cursor: \'pointer\',\s*transition: \'color 0\.2s\'\s*\}\}\s*onMouseEnter=\{e => e\.currentTarget\.style\.color = \'#1B5E20\'\}\s*onMouseLeave=\{e => e\.currentTarget\.style\.color = \'#111827\'\}\s*>',
    r"<h3 style={{\1}}>",
    text
)

# 6. Replace Full Tech Spec button with See More anchor link
old_btn = r'''                      {/* Full Spec / Request RFQ Details Button */}
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="btn-animated"
                        style={{
                          flex: 1,
                          background: '#1B5E20',
                          color: '#FFFFFF',
                          border: '1.5px solid #1B5E20',
                          borderRadius: '8px',
                          padding: '9px 14px',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(27,94,32,0.2)',
                          transition: 'all 0.2s',
                          letterSpacing: '0.03em',
                          textTransform: 'uppercase',
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                      >
                        <ShoppingBag size={14} />
                        <span>Full Tech Spec</span>
                        <ChevronRight size={14} />
                      </button>'''

new_btn = r'''                      {/* See More Button */}
                      <a
                        href="#contact"
                        className="btn-animated"
                        style={{
                          flex: 1,
                          background: '#1B5E20',
                          color: '#FFFFFF',
                          border: '1.5px solid #1B5E20',
                          borderRadius: '8px',
                          padding: '9px 14px',
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(27,94,32,0.2)',
                          transition: 'all 0.2s',
                          textDecoration: 'none',
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                      >
                        <span>See More</span>
                        <ChevronRight size={15} />
                      </a>'''

if old_btn in text:
    text = text.replace(old_btn, new_btn)
    print("Replaced Full Tech Spec button")
else:
    print("Could not find old_btn directly, searching with regex...")
    text = re.sub(
        r'\{\/\* Full Spec \/ Request RFQ Details Button \*\/\}[\s\S]*?<button[\s\S]*?onClick=\{\(\) => setSelectedProduct\(product\)\}[\s\S]*?<\/button>',
        new_btn,
        text
    )

# 7. In Table View, replace View Specs button
old_table_btn = r'''                        <button
                          onClick={() => setSelectedProduct(p)}
                          style={{
                            background: '#1B5E20',
                            color: '#FFF',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '0.775rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          View Specs
                        </button>'''

new_table_link = r'''                        <a
                          href="#contact"
                          style={{
                            background: '#1B5E20',
                            color: '#FFF',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '0.775rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            display: 'inline-block'
                          }}
                        >
                          See More
                        </a>'''

if old_table_btn in text:
    text = text.replace(old_table_btn, new_table_link)
    print("Replaced table View Specs button")

# 8. Remove the Drawer Modal at the bottom
modal_start = "{/* ==================== SPECIFICATION & CAD DETAIL DRAWER MODAL ==================== */}"
m_idx = text.find(modal_start)
if m_idx != -1:
    end_tag = "      </div>\n    </section>"
    e_idx = text.find(end_tag, m_idx)
    if e_idx != -1:
        text = text[:m_idx] + text[e_idx:]
        print("Removed Drawer Modal")

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

print("InteractiveExplorer.tsx updated successfully!")
