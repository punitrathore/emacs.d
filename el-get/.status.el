((align-cljlet status "installed" recipe
	       (:name align-cljlet :description "Align command for Clojure's `let'-like forms" :type github :pkgname "gstamp/align-cljlet"))
 (anzu status "installed" recipe
       (:name anzu :website "https://github.com/syohex/emacs-anzu" :description "A minor mode which displays current match and total matches." :type "github" :branch "master" :pkgname "syohex/emacs-anzu"))
 (browse-kill-ring status "required" recipe nil)
 (cider status "installed" recipe
	(:name cider :type github :pkgname "clojure-emacs/cider" :checkout "v0.7.0" :after
	       (progn
		 (add-hook 'cider-repl-mode-hook 'paredit-mode)
		 (add-hook 'clojure-mode-hook 'cider-mode)
		 (add-hook 'cider-mode-hook 'cider-turn-on-eldoc-mode)
		 (setq cider-repl-pop-to-buffer-on-connect nil)
		 (setq nrepl-hide-special-buffers 1)
		 (setq cider-popup-stacktraces nil)
		 (setq nrepl-buffer-name-show-port 1)
		 (setq cider-prompt-save-file-on-load nil)
		 (setq cider-repl-history-size 1000)
		 (setq cider-repl-history-file "~/.emacs.d/cider_repl_hist.txt"))))
 (cl-lib status "installed" recipe
	 (:name cl-lib :builtin "24.3" :type elpa :description "Properly prefixed CL functions and macros" :url "http://elpa.gnu.org/packages/cl-lib.html"))
 (clj-refactor status "installed" recipe
	       (:name clj-refactor :description "A collection of simple clojure refactoring functions" :type github :checkout "0.12.0" :depends
		      (dash s clojure-mode yasnippet paredit multiple-cursors)
		      :pkgname "magnars/clj-refactor.el"))
 (clojure-mode status "installed" recipe
	       (:name clojure-mode :after
		      (progn
			(add-hook 'clojure-mode-hook
				  (lambda nil
				    (clj-refactor-mode 1)
				    (define-key clj-refactor-map
				      (kbd "M-C->")
				      'cljr-thread)
				    (define-key clj-refactor-map
				      (kbd "M-C-<")
				      'cljr-unwind))))
		      :website "https://github.com/clojure-emacs/clojure-mode" :description "Emacs support for the Clojure language." :type github :pkgname "clojure-emacs/clojure-mode"))
 (color-theme status "required" recipe nil)
 (dash status "installed" recipe
       (:name dash :description "A modern list api for Emacs. No 'cl required." :type github :pkgname "magnars/dash.el"))
 (el-get status "installed" recipe
	 (:name el-get :website "https://github.com/dimitri/el-get#readme" :description "Manage the external elisp bits and pieces you depend upon." :type github :branch "master" :pkgname "dimitri/el-get" :info "." :compile
		("el-get.*\\.el$" "methods/")
		:load "el-get.el"))
 (emacs-goodies-el status "installed" recipe
		   (:name emacs-goodies-el :website "http://packages.debian.org/sid/emacs-goodies-el" :description "Miscellaneous add-ons for Emacs" :type http-tar :url "http://alioth.debian.org/snapshots.php?group_id=30060" :options
			  ("xzf")
			  :build
			  (let*
			      ((pdir
				(el-get-package-directory 'emacs-goodies-el))
			       (pkg-goodies-dir
				(or
				 (car
				  (directory-files pdir 'full "^pkg-goodies-el-"))
				 pdir))
			       (default-directory
				 (file-name-as-directory
				  (expand-file-name "emacs-goodies-el" pkg-goodies-dir))))
			    (el-get-verbose-message "Building commands from %s" default-directory)
			    (el-get-verbose-message "Expecting commands to run in %s" pdir)
			    (append
			     (mapcar
			      (lambda
				(patch-file)
				(list "patch" "-p1" "-f" "--no-backup-if-mismatch" "-i"
				      (expand-file-name patch-file
							(expand-file-name "emacs-goodies-el/debian/patches" pdir))
				      "-d"
				      (expand-file-name "emacs-goodies-el" pdir)))
			      (with-temp-buffer
				(insert-file-contents "debian/patches/series")
				(split-string
				 (buffer-string)
				 "\n" t)))
			     (let
				 ((makerfiles
				   (split-string
				    (shell-command-to-string "find . -name '*.make'"))))
			       (el-get-verbose-message "Makerfiles: %S" makerfiles)
			       (mapcar
				(lambda
				  (makerfile)
				  (let*
				      ((maker-dir
					(expand-file-name
					 (file-name-directory makerfile)
					 (expand-file-name "emacs-goodies-el" pdir)))
				       (maker-command
					(replace-regexp-in-string "\n" ""
								  (replace-regexp-in-string "emacs -batch"
											    (concat el-get-emacs " -batch")
											    (with-temp-buffer
											      (insert-file-contents makerfile)
											      (buffer-string))))))
				    (format "cd %s && %s" maker-dir maker-command)))
				makerfiles))))
			  :load-path
			  ("emacs-goodies-el/elisp/debian-el" "emacs-goodies-el/elisp/devscripts-el" "emacs-goodies-el/elisp/dpkg-dev-el" "emacs-goodies-el/elisp/emacs-goodies-el")
			  :features
			  (emacs-goodies-el debian-el dpkg-dev-el)
			  :post-init
			  (progn
			    (autoload 'debuild "devscripts" "Run debuild in the current directory." t)
			    (autoload 'debc "devscripts" "Run debc in the current directory." t)
			    (autoload 'debi "devscripts" "Run debi in the current directory." t)
			    (autoload 'debit "devscripts" "Run debit in the current directory." t)
			    (autoload 'debdiff "devscripts" "Compare contents of CHANGES-FILE-1 and CHANGES-FILE-2." t)
			    (autoload 'debdiff-current "devscripts" "Compare the contents of .changes file of current version with previous version;\nrequires access to debian/changelog, and being in debian/ dir." t)
			    (autoload 'debclean "devscripts" "Run debclean in the current directory." t)
			    (autoload 'pdebuild "pbuilder-mode" "Run pdebuild in the current directory." t)
			    (autoload 'pdebuild-user-mode-linux "pbuilder-mode" "Run pdebuild-user-mode-linux in the current directory." t)
			    (autoload 'pbuilder-log-view-elserv "pbuilder-log-view-mode" "Run a elserv session with log view.\n\nRunning this requires elserv.  Use elserv, and do `elserv-start' before invoking this command." t)
			    (autoload 'debuild-pbuilder "pbuilder-mode" "Run debuild-pbuilder in the current directory." t)
			    (autoload 'pbuilder-build "pbuilder-mode" "Run pbuilder-build for the given filename." t)
			    (autoload 'pbuilder-user-mode-linux-build "pbuilder-mode" "Run pbuilder-user-mode-linux for the given filename." t))))
 (epl status "installed" recipe
      (:name epl :description "EPL provides a convenient high-level API for various package.el versions, and aims to overcome its most striking idiocies." :type github :pkgname "cask/epl"))
 (exec-path-from-shell status "installed" recipe
		       (:name exec-path-from-shell :after
			      (progn
				(when
				    (memq window-system
					  '(mac ns))
				  (exec-path-from-shell-initialize)))
			      :website "https://github.com/purcell/exec-path-from-shell" :description "Emacs plugin for dynamic PATH loading" :type github :pkgname "purcell/exec-path-from-shell"))
 (expand-region status "installed" recipe
		(:name expand-region :after
		       (progn
			 (global-set-key
			  (kbd "C-=")
			  'er/expand-region))
		       :type github :pkgname "magnars/expand-region.el" :description "Expand region increases the selected region by semantic units. Just keep pressing the key until it selects what you want." :website "https://github.com/magnars/expand-region.el#readme"))
 (flx status "installed" recipe
      (:name flx :type github :pkgname "lewang/flx" :checkout "v0.5" :after
	     (progn
	       (ido-mode 1)
	       (ido-everywhere 1)
	       (flx-ido-mode 1)
	       (setq ido-enable-flex-matching 1)
	       (setq ido-use-faces nil)
	       (recentf-mode 1)
	       (defun recentf-ido-find-file nil "Find a recent file using Ido."
		 (interactive)
		 (let
		     ((file
		       (ido-completing-read "Choose recent file: " recentf-list nil t)))
		   (when file
		     (find-file file))))
	       (global-set-key
		(kbd "C-x C-r")
		'recentf-ido-find-file))))
 (gh status "installed" recipe
     (:name gh :description "Github API client libraries" :type github :pkgname "sigma/gh.el" :depends
	    (pcache logito request)
	    :autoloads nil))
 (gist status "installed" recipe
       (:name gist :type github :pkgname "defunkt/gist.el" :checkout "v1.1.0" :depends
	      (gh tabulated-list)
	      :description "Emacs integration for gist.github.com" :website "http://github.com/defunkt/gist.el"))
 (git-modes status "installed" recipe
	    (:name git-modes :description "GNU Emacs modes for various Git-related files" :type github :pkgname "magit/git-modes"))
 (git-timemachine status "installed" recipe
		  (:name git-timemachine :description "Step through historic versions of git controlled files" :type github :checkout "1.3" :pkgname "pidu/git-timemachine"))
 (github-browse-file status "installed" recipe
		     (:name github-browse-file :type github :pkgname "osener/github-browse-file" :checkout "1478670dfa1f6925d75b520f10f35feb1e6f2f2c"))
 (goto-last-change status "installed" recipe
		   (:name goto-last-change :after
			  (progn
			    (global-set-key
			     (kbd "C-x C-/")
			     'goto-last-change))
			  :description "Move point through buffer-undo-list positions" :type emacswiki :load "goto-last-change.el"))
 (highlight-parentheses status "installed" recipe
			(:name highlight-parentheses :after
			       (progn
				 (setq hl-paren-colors
				       '("black" "black" "black" "black" "black" "black"))
				 (setq hl-paren-background-colors
				       '("#2aa198" "#268bd2" "#d33682" "#cb4b16" "#b58900" "#859900"))
				 (define-globalized-minor-mode global-highlight-parentheses-mode highlight-parentheses-mode
				   (lambda nil
				     (highlight-parentheses-mode 1)))
				 (global-highlight-parentheses-mode 1))
			       :description "Highlight the matching parentheses surrounding point." :type github :pkgname "nschum/highlight-parentheses.el"))
 (highlight-symbol status "installed" recipe
		   (:name highlight-symbol :description "Quickly highlight a symbol throughout the buffer and cycle through its locations." :type github :pkgname "nschum/highlight-symbol.el" :checkout "1.2" :after
			  (progn
			    (global-set-key
			     [(control f3)]
			     'highlight-symbol-at-point)
			    (global-set-key
			     [f3]
			     'highlight-symbol-next)
			    (global-set-key
			     [(shift f3)]
			     'highlight-symbol-prev)
			    (global-set-key
			     [(meta f3)]
			     'highlight-symbol-query-replace))))
 (hl-sexp status "installed" recipe
	  (:name hl-sexp :description "Highlight the current sexp" :type http :url "http://edward.oconnor.cx/elisp/hl-sexp.el" :features hl-sexp))
 (ido-hacks status "installed" recipe
	    (:name ido-hacks :after
		   (progn
		     (ido-mode 1)
		     (setq ido-everywhere 1)
		     (ido-hacks-mode 1)
		     (setq ido-save-directory-list-file "~/.ido.last"))
		   :description "Advices for ido-mode." :type github :pkgname "scottjad/ido-hacks" :load "ido-hacks.el"))
 (ido-ubiquitous status "installed" recipe
		 (:name ido-ubiquitous :description "Use ido (nearly) everywhere" :type elpa))
 (js2-mode status "installed" recipe
	   (:name js2-mode :website "https://github.com/mooz/js2-mode#readme" :description "An improved JavaScript editing mode" :type github :pkgname "mooz/js2-mode" :prepare
		  (autoload 'js2-mode "js2-mode" nil t)))
 (logito status "installed" recipe
	 (:name logito :type github :pkgname "sigma/logito" :description "logging library for Emacs" :website "http://github.com/sigma/logito"))
 (magit status "installed" recipe
	(:name magit :website "https://github.com/magit/magit#readme" :description "It's Magit! An Emacs mode for Git." :type github :pkgname "magit/magit" :depends
	       (cl-lib git-modes)
	       :info "." :build
	       (if
		   (version<= "24.3" emacs-version)
		   `(("make" ,(format "EMACS=%s" el-get-emacs)
		      "all"))
		 `(("make" ,(format "EMACS=%s" el-get-emacs)
		    "docs")))
	       :build/berkeley-unix
	       (("touch" "`find . -name Makefile`")
		("gmake"))
	       :prepare
	       (require 'magit-autoloads)))
 (markdown-mode status "installed" recipe
		(:name markdown-mode :description "Major mode to edit Markdown files in Emacs" :website "http://jblevins.org/projects/markdown-mode/" :type github :checkout "v2.0" :pkgname "defunkt/markdown-mode" :prepare
		       (add-to-list 'auto-mode-alist
				    '("\\.\\(md\\|mdown\\|markdown\\)\\'" . markdown-mode))))
 (multiple-cursors status "installed" recipe
		   (:name multiple-cursors :after
			  (progn
			    (global-set-key
			     (kbd "C->")
			     'mc/mark-next-like-this)
			    (global-set-key
			     (kbd "C-<")
			     'mc/mark-previous-like-this)
			    (global-set-key
			     (kbd "C-c C-<")
			     'mc/mark-all-like-this))
			  :description "An experiment in adding multiple cursors to emacs" :type github :pkgname "magnars/multiple-cursors.el"))
 (neotree status "installed" recipe
	  (:name neotree :website "https://github.com/jaypei/emacs-neotree" :description "An Emacs tree plugin like NerdTree for Vim." :type github :checkout "0.2" :pkgname "jaypei/emacs-neotree" :after
		 (progn
		   (global-set-key
		    [f8]
		    'neotree-toggle))))
 (org-mode status "installed" recipe
	   (:name org-mode :website "http://orgmode.org/" :description "Org-mode is for keeping notes, maintaining ToDo lists, doing project planning, and authoring with a fast and effective plain-text system." :type git :url "git://orgmode.org/org-mode.git" :info "doc" :build/berkeley-unix `,(mapcar
																																				       (lambda
																																					 (target)
																																					 (list "gmake" target
																																					       (concat "EMACS="
																																						       (shell-quote-argument el-get-emacs))))
																																				       '("oldorg"))
		  :build `,(mapcar
			    (lambda
			      (target)
			      (list "make" target
				    (concat "EMACS="
					    (shell-quote-argument el-get-emacs))))
			    '("oldorg"))
		  :load-path
		  ("." "contrib/lisp" "lisp")
		  :load
		  ("lisp/org-loaddefs.el")
		  :after
		  (progn
		    (defun notes nil "Switch to notes dir."
		      (interactive)
		      (ido-find-file-in-dir "~/notes")))))
 (package status "installed" recipe
	  (:name package :description "ELPA implementation (\"package.el\") from Emacs 24" :builtin "24" :type http :url "http://repo.or.cz/w/emacs.git/blob_plain/1a0a666f941c99882093d7bd08ced15033bc3f0c:/lisp/emacs-lisp/package.el" :shallow nil :features package :post-init
		 (progn
		   (let
		       ((old-package-user-dir
			 (expand-file-name
			  (convert-standard-filename
			   (concat
			    (file-name-as-directory default-directory)
			    "elpa")))))
		     (when
			 (file-directory-p old-package-user-dir)
		       (add-to-list 'package-directory-list old-package-user-dir)))
		   (setq package-archives
			 (bound-and-true-p package-archives))
		   (mapc
		    (lambda
		      (pa)
		      (add-to-list 'package-archives pa 'append))
		    '(("ELPA" . "http://tromey.com/elpa/")
		      ("melpa" . "http://melpa.milkbox.net/packages/")
		      ("gnu" . "http://elpa.gnu.org/packages/")
		      ("marmalade" . "http://marmalade-repo.org/packages/")
		      ("SC" . "http://joseito.republika.pl/sunrise-commander/"))))))
 (paredit status "installed" recipe
	  (:name paredit :after
		 (progn
		   (autoload 'enable-paredit-mode "paredit" "Turn on pseudo-structural editing of Lisp code." t)
		   (add-hook 'emacs-lisp-mode-hook #'enable-paredit-mode)
		   (add-hook 'eval-expression-minibuffer-setup-hook #'enable-paredit-mode)
		   (add-hook 'prog-mode-hook #'enable-paredit-mode))
		 :description "Minor mode for editing parentheses" :type http :prepare
		 (progn
		   (autoload 'enable-paredit-mode "paredit")
		   (autoload 'disable-paredit-mode "paredit"))
		 :url "http://mumble.net/~campbell/emacs/paredit.el"))
 (pcache status "installed" recipe
	 (:name pcache :description "persistent caching for Emacs" :type github :pkgname "sigma/pcache"))
 (pkg-info status "installed" recipe
	   (:name pkg-info :description "Provide information about Emacs packages." :type github :pkgname "lunaryorn/pkg-info.el" :depends
		  (dash epl)))
 (projectile status "installed" recipe
	     (:name projectile :description "Project jumping, searching, finding functions" :after
		    (progn
		      (projectile-global-mode))
		    :type github :pkgname "bbatsov/projectile" :depends
		    (dash s pkg-info)))
 (protobuf-mode status "installed" recipe
		(:name protobuf-mode :website "http://code.google.com/p/protobuf/" :description "Major mode for editing protocol buffers." :type http :url "http://protobuf.googlecode.com/svn-history/trunk/editors/protobuf-mode.el" :features protobuf-mode))
 (psvn status "installed" recipe
       (:name psvn :description "Subversion interface for emacs" :type http :url "http://www.xsteve.at/prg/emacs/psvn.el"))
 (queue status "installed" recipe
	(:name queue :description "Queue data structure" :type elpa))
 (rainbow-delimiters status "installed" recipe
		     (:name rainbow-delimiters :after
			    (progn
			      (global-rainbow-delimiters-mode))
			    :website "https://github.com/jlr/rainbow-delimiters#readme" :description "Color nested parentheses, brackets, and braces according to their depth." :type github :pkgname "jlr/rainbow-delimiters"))
 (rainbow-mode status "installed" recipe
	       (:name rainbow-mode :description "Colorize color names in buffers" :type github :checkout "2298c419aec2a6cac85f94e9627fec4c0d373c5f" :pkgname "emacsmirror/rainbow-mode" :type elpa))
 (request status "installed" recipe
	  (:name request :description "Easy HTTP request for Emacs Lisp" :type github :submodule nil :pkgname "tkf/emacs-request"))
 (s status "installed" recipe
    (:name s :description "The long lost Emacs string manipulation library." :type github :pkgname "magnars/s.el"))
 (switch-window status "installed" recipe
		(:name switch-window :description "A *visual* way to choose a window to switch to" :type github :pkgname "dimitri/switch-window" :checkout "453fbc74c07479ef46e3449ee8432231a9537a8f" :features switch-window :after
		       (progn
			 (global-set-key
			  (kbd "C-x o")
			  'switch-window))))
 (tabulated-list status "installed" recipe
		 (:name tabulated-list :type github :pkgname "sigma/tabulated-list.el" :description "generic major mode for tabulated lists." :website "http://github.com/sigma/tabulated-list.el"))
 (wgrep status "installed" recipe
	(:name wgrep :type github :pkgname "mhayashi1120/Emacs-wgrep" :checkout "8e91b932d9c64c5525a1c0a8c770ec55e213e790" :after
	       (progn
		 (setq wgrep-auto-save-buffer t))))
 (yasnippet status "installed" recipe
	    (:name yasnippet :website "https://github.com/capitaomorte/yasnippet.git" :description "YASnippet is a template system for Emacs." :type github :pkgname "capitaomorte/yasnippet" :compile "yasnippet.el" :submodule nil :build
		   (("git" "submodule" "update" "--init" "--" "snippets")))))
