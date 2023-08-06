outFolder=docs
templateFile=docs/template/template.html
markdownFile=docs/kanban.md
cssFile=docs/style/kanban.css 
outFile=docs/kanban.html
markdownFileFromUrl=https://raw.githubusercontent.com/MozaicWorks/KanbanBoardInMarkdown/master/board.md 
pandocArgs=-c $(cssFile) --template $(templateFile) -o $(outFile)
pandocCommand=pandoc -s
copyStyleCommand=cp $(cssFile) $(outFolder)/style/
openCommand=xdg-open

build: .makeDirs
	$(pandocCommand) $(markdownFile) $(pandocArgs)
	$(copyStyleCommand)

fromUrl: .makeDirs
	$(pandocCommand) $(markdownFileFromUrl) $(pandocArgs)
	$(copyStyleCommand)

open:
	$(openCommand) $(outFolder)/$(outFile)

clean:
	rm -rf $(outFolder)

.makeDirs:
	mkdir -p $(outFolder)/style 