# Debouncing -> skipping some events (i.e serachbar while searching on youtube etc)

- key - i
- suppose if we press key i then it renders component.
- call useEffect
- start timer and make api call after 200ms.

- key - ip
- suppose if we press key p before 200ms 
- destroy the previous component (useEffect return method)
- reconcilitation process trigger
- re-render component
- useEffect()