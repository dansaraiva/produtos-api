def sabeLe():
    print("Classificação de Alfabetização Infantil")
    
    serie = int(input("Informe a série do aluno (1, 2, 3 ou 4): "))
    if serie < 1 or serie > 4:
        print("Erro: Série inválida. Informe um número entre 1 e 4.")
        return
    
    print("Responda com 'sim' ou 'não' às seguintes perguntas:")
    
    reconheceLetras = input("A criança reconhece letras e sílabas? ").strip().lower()
    lePalavras = input("A criança consegue ler palavras simples? ").strip().lower()
    leTextos = input("A criança consegue ler frases e pequenos textos? ").strip().lower()
    
    if reconheceLetras != "sim" or lePalavras != "sim":
        nivel = "1 Pré-Leitor"
    elif leTextos != "sim":
        nivel = "2 Leitor Inicial"
    elif serie < 4:
        nivel = "3 Leitor Intermediário"
    else:
        nivel = "4 Leitor Fluente"
    
    print("\nO aluno foi classificado como:", nivel)
    
sabeLe()