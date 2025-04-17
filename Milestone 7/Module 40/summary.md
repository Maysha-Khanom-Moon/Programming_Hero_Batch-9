### 6 corner stones of react
- JSX, component, props, events, state, and effect


### Prop Drilling - pass props in multi-level
- pass data (props) from a parent component down through multiple levels of child components — even if some of those components don’t need the data themselves — just so the deepest child can access it.


### deploy with surge
way 1:
1. goto to vite (Surge section)
2. npm run build
3. surge dist
4. for custom domain
    - surge dist custom-domain.com
    - add public --> CNAME --> custom-domain.com

<br>

For update:
- npm run build
- surge dist domainname.com
    - otherwise each time it will give new link
    - but if CNAME present then no need to mention domain name


### deploy with netlify
1. npm run build
2. just drop-down the dist folder
3. then deploy