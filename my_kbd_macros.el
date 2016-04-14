(fset 'my-xml-indent
   [?\C-s ?, right left backspace return tab])
(global-set-key (kbd "C-c C-p m") 'my-xml-indent)
(fset 'js-d
      [?d ?e ?s ?c ?r ?i ?b ?e ?\( ?\" ?\" ?, ?  ?f ?u ?n ?c ?t ?i ?o ?n ?\( ?\) ?\{ return return ?\} ?\) ?\; up up right right right right right right right])
(global-set-key (kbd "C-c C-p d") 'js-d)

(fset 'js-i
      [?i ?t ?\( ?\" ?\" ?, ?  ?f ?u ?n ?c ?t ?i ?o ?n ?\( ?\) ?\{ return return ?\} ?\; up tab up ?s ?h ?o ?u ?l ?d ? ])

(global-set-key (kbd "C-c C-p i") 'js-i)


(fset 'fix-clojure-error
      [?\C-s ?0 ?1 ?2 right left return tab right])

(global-set-key (kbd "C-c C-p c") 'fix-clojure-error)


(fset 'sum-nums
      [?\C-e ?\C-  M-left ?\s-c down down down down down down down down down down down down down down ?\C-a])

(global-set-key (kbd "C-c b") 'sum-nums)


(fset 'keep-master-merge-conflict
      [?\C-s ?H ?E ?A ?D ?: ?\C-a ?\C-  ?\C-s ?= ?= ?= ?= ?= ?\C-e ?\C-x ?\C-k backspace ?\C-s ?m ?a ?s ?t ?e ?r ?\C-a ?\C-k backspace])

(global-set-key (kbd "C-x s-m") 'keep-master-merge-conflict)

(fset 'gui-diffify
   [?\C-s ?= ?\C-m right ?\C-  ?\C-s ?R ?a ?n up up ?\C-e left left ?\s-c ?\M-> ?\( ?g ?u ?i ?- ?d ?i ?f ?f ?  ?\) left ?\s-v right])

(global-set-key (kbd "C-x C-g") 'gui-diffify)
